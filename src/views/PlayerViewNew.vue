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

const videoUrl = ref('')
const videoUrlDefault = ref('https://d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8')
const thumnailUrl = ref('')
const thumnailUrlDefault = ref(
  'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
)
const trackUrl = ref('')
const trackUrlDefault = ref('https://media-files.vidstack.io/sprite-fight/subs/english.vtt')
const track = {
  src: 'https://media-files.vidstack.io/sprite-fight/subs/english.vtt',
  label: 'English 1',
  language: 'en-US',
  kind: 'subtitles',
  default: true
}
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
  //   $player.value!.textTracks.add(track)
  //   console.log('click')

  //   document.body.click()
  //   console.log('after click')
  //   for (const track of textTracks) {
  //     $player.value!.textTracks.add(track)
  //   }
  //   console.log('$player.value!.textTracks', $player.value!.textTracks);

    $player.value!.textTracks.addEventListener('add', (event) => {
      const newTrack = event.detail; // `TextTrack`
      console.log('newTrack add', newTrack);
        if (newTrack.label == '' || newTrack.label === 'English Default' || newTrack.label === 'English D') {
            newTrack.mode = 'showing'
        }
      // ...
    });
    $player.value!.textTracks.addEventListener('mode-change', (event) => {
      const newTrack = event.detail; // `TextTrack`
      console.log('newTrack mode-change', newTrack);

      // ...
    });

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
//   console.log('event play', event)
}
const handleClick = () => {
//   console.log('videoUrl', videoUrl.value)
//   console.log('thumnailUrl', thumnailUrl.value)
//   console.log('trackUrl', trackUrl.value)
  if (!videoUrl.value?.trim()) {
    alert('nhập url')
    return
  }
    $player.value!.textTracks.add({
      src: trackUrl.value,
      label: 'English Default',
      language: 'en-US',
      kind: 'subtitles',
      default: true
    })
  videoUrlDefault.value = videoUrl.value
  thumnailUrlDefault.value = thumnailUrl.value
  trackUrlDefault.value = trackUrl.value
  //   $player.value!.textTracks.remove(track)
}
</script>

<template>
  <div class="tw-video-flex tw-video-flex-col tw-video-mt-10 tw-video-ml-10 tw-video-gap-5 tw-video-max-w-[1240px]">
    <label class="tw-video-flex tw-video-items-center tw-video-mb-10 xsm:tw-video-mb-0">
      <span class="tw-video-block tw-video-min-w-[120px]">Video Url</span>
      <input
        class="tw-video-flex-1 tw-video-border tw-video-border-solid tw-video-px-3 tw-video-py-1"
        type="text"
        name="video-url"
        v-model="videoUrl"
      />
    </label>
    <label class="tw-video-flex tw-video-items-center">
      <span class="tw-video-block tw-video-min-w-[120px]">Thumnail Url</span>
      <input
        class="tw-video-flex-1 tw-video-border tw-video-border-solid tw-video-px-3 tw-video-py-1"
        type="text"
        name="video-thumnail"
        v-model="thumnailUrl"
      />
    </label>
    <label class="tw-video-flex tw-video-items-center">
      <span class="tw-video-block tw-video-min-w-[120px]">Caption Url</span>
      <input
        class="tw-video-flex-1 tw-video-border tw-video-border-solid tw-video-px-3 tw-video-py-1"
        type="text"
        name="video-caption"
        v-model="trackUrl"
      />
    </label>
    <button class="tw-video-border tw-video-border-solid tw-video-w-40 tw-video-m-auto" @click="handleClick">Load Video</button>
  </div>
  <div class="tw-video-flex md:tw-video-p-10">
    <media-player
      autoplay
      class="tw-video-w-full tw-video-max-h-[100vh] tw-video-max-w-[1440px] tw-video-aspect-video tw-video-bg-slate-900 tw-video-text-whittw-video-e font-sans tw-video-overflow-hidden tw-video-rounded-md tw-video-ring-media-focus data-[focus]:tw-video-ring-4 md:tw-video-mt-10 md:tw-video-mx-auto"
      title="Sprite Fight"
      :src="videoUrlDefault"
      crossorigin
      playsinline
      @provider-change="onProviderChange"
      @can-play="onCanPlay"
      @play="onPlay"
      ref="$player"
    >
      <media-provider>
        <media-poster
          class="tw-video-absolute tw-video-inset-0 tw-video-block tw-video-h-full tw-video-w-full tw-video-rounded-md tw-video-opacity-0 tw-video-transition-opacity data-[visible]:tw-video-opacity-100 [&>img]:tw-video-h-full [&>img]:tw-video-w-full [&>img]:tw-video-object-cover"
          src="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        <track
          :src="trackUrlDefault"
          kind="subtitles"
          label="English D"
          lang="en-US"
          type="vtt"
          default
        />
      </media-provider>
      <VideoLayout :thumbnails="thumnailUrlDefault" />
    </media-player>
  </div>
</template>
