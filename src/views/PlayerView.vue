<script lang="ts" setup>
// Import styles.
import 'vidstack/player/styles/base.css'
// Register elements.
import 'vidstack/player'
import 'vidstack/player/ui'
import 'vidstack/icons'

import {
  isHLSProvider,
  TextTrack,
  type MediaCanPlayEvent,
  type MediaPlayEvent,
  type MediaProviderChangeEvent
} from 'vidstack'
import type { MediaPlayerElement } from 'vidstack/elements'
import { onMounted, ref } from 'vue'

import VideoLayout from '../components/layouts/VideoLayout.vue'
import { textTracks } from '../constants/tracks'

const $player = ref<MediaPlayerElement>()

onMounted(() => {
  /**
   * You can add these tracks using HTML as well.
   *
   * @example
   * ```html
   * <media-provider>
   *   <track label="..." src="..." kind="..." srclang="..." default />
   *   <track label="..." src="..." kind="..." srclang="..." />
   * </media-provider>
   * ```
   */
  document.body.click()
  for (const track of textTracks) {
    $player.value!.textTracks.add(track)
  }
  //   console.log('$player.value!.textTracks', $player.value!.textTracks);

  //   $player.value!.textTracks.addEventListener('add', (event) => {
  //     const newTrack = event.detail; // `TextTrack`
  //     console.log('newTrack add', newTrack);

  //     // ...
  //   });
  //   $player.value!.textTracks.addEventListener('mode-change', (event) => {
  //     const newTrack = event.detail; // `TextTrack`
  //     console.log('newTrack mode-change', newTrack);

  //     // ...
  //   });

  //Modify Track
  //   const trackNew = new TextTrack({
  //     src: 'https://media-files.vidstack.io/sprite-fight/subs/english.vtt',
  //     kind: 'subtitles',
  //     label: 'English',
  //     language: 'en-US',
  //     type: 'vtt',
  //     default: true,
  //   });
  //   $player.value!.textTracks.add(trackNew);
  //   trackNew.addEventListener('load', (e) => {
  //     console.log('----------------- e', e);
  //     console.log('-------- $player.value!.textTracks', $player.value!.textTracks?._defaults?.captions?._cues);
  //     $player.value!.textTracks?._defaults?.captions?._cues.forEach(cue => {
  //         cue.text = "Minh " + cue.startTime
  //     })
  //     // ...
  //   });
  // Subscribe to state updates - you can connect them to Vue refs if needed.
  return $player.value!.subscribe(({ paused, viewType }) => {
    // console.log('is paused?', '->', paused);
    // console.log('is audio view?', '->', viewType === 'audio');
  })
})

function onProviderChange(event: MediaProviderChangeEvent) {
  const provider = event.detail
  // We can configure provider's here.
  if (isHLSProvider(provider)) {
    provider.config = {}
  }
}

// We can listen for the `can-play` event to be notified when the player is ready.
function onCanPlay(event: MediaCanPlayEvent) {
  // ...
}
function onPlay(event: MediaPlayEvent) {
  // ...
  console.log('event play', event)
}
</script>

<template>
  <div class="flex p-10">
    <media-player
      autoplay
      class="w-full max-w-[1440px] aspect-video bg-slate-900 text-white font-sans overflow-hidden rounded-md ring-media-focus data-[focus]:ring-4 mt-10 mx-auto"
      title="Sprite Fight"
      src="https://d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8"
      crossorigin
      playsinline
      @provider-change="onProviderChange"
      @can-play="onCanPlay"
      @play="onPlay"
      ref="$player"
    >
      <media-provider>
        <media-poster
          class="absolute inset-0 block h-full w-full rounded-md opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
          src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
      </media-provider>

      <VideoLayout
        thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
      />
    </media-player>
  </div>
</template>
