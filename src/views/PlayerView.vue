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
import { computed, onMounted, ref } from 'vue'

import VideoLayout from '../components/layouts/VideoLayout.vue'
import { textTracks } from '../constants/tracks'

const $player = ref<MediaPlayerElement>()

const videoUrlDefault = ref('https://dan-le-blob-cdn-production.glb.edgio.link/migrated-assets/asset-a6974600-348d-4d12-8633-7bb7b8f5d785/test-by-ngan.m3u8')
// const videoUrlDefault = ref('https://d2zihajmogu5jn.cloudfront.net/elephantsdream/hls/ed_hd.m3u8')
// const thumnailUrlDefault = ref(
//   ''
// )
const thumnailUrlDefault = ref(
  'https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt'
)
const trackUrlDefault = ref('https://dan-le-blob-cdn-production.glb.edgio.link/migrated-assets/asset-a6974600-348d-4d12-8633-7bb7b8f5d785/transcript.vtt')
// const trackUrlDefault = ref('https://media-files.vidstack.io/sprite-fight/subs/english.vtt')

const posterUrl = ref('https://dan-le-blob-cdn-production.glb.edgio.link/migrated-assets/asset-a6974600-348d-4d12-8633-7bb7b8f5d785/Thumbnail000001.jpg?auto=compress,format');
// const posterUrl = ref('https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=1200');
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
    const trackNew = computed(() => new TextTrack({
    src: trackUrlDefault.value,
    kind: 'subtitles',
    label: 'English',
    language: 'en-US',
    type: 'vtt',
    default: true,
    id: 'default'
  }));

  $player.value!.textTracks.add(trackNew.value)
  trackNew.value.addEventListener('load', () => {
    // console.log('$player.value?.textTracks', $player.value?.textTracks.toArray());
    const track = $player.value?.textTracks.getById('default');
    // console.log('track', track);
    const myCues = track?.cues || []
    // const myCues = $player.value?.textTracks?._defaults?.captions?._cues || []
    // console.log('-------- $player.value!.textTracks', $player.value!.textTracks?._defaults?.captions?._cues);
    myCues.forEach((cue: any, index: number) => {
        if (index % 2 === 0 && myCues[index + 1] !== undefined && myCues[index + 1] !== null ) {
            cue.text += ' ' + myCues[index + 1].text;
            if (!isNaN(myCues[index + 1].endTime)) cue.endTime = myCues[index + 1].endTime;
        } else {
            cue.text = '';
            cue.endTime = -1;
            cue.startTime = -1;
        }
    })
  });
  //   console.log('click')

  //   document.body.click()
  //   console.log('after click')
  //   for (const track of textTracks) {
  //     $player.value!.textTracks.add(track)
  //   }
  //   console.log('$player.value!.textTracks', $player.value!.textTracks);

  // $player.value!.textTracks.addEventListener('add', (event) => {
  //   const newTrack = event.detail; // `TextTrack`
  //   console.log('newTrack add', newTrack);
  //     if (newTrack.label == '' || newTrack.label === 'English Default' || newTrack.label === 'English D') {
  //         newTrack.mode = 'showing'
  //     }
  //   // ...
  // });
  // $player.value!.textTracks.addEventListener('mode-change', (event) => {
  //   const newTrack = event.detail; // `TextTrack`
  //   console.log('newTrack mode-change', newTrack);

  //   // ...
  // });

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
//   console.log('event play', $player.value!.textTracks?._defaults?.captions?._cues)
//   console.log('event play', $player.value!.textTracks)
  const track = $player.value?.textTracks.getById('default');
  const myCues = track?.cues || []
//   console.log('myCues play', myCues);
}
</script>

<template>
  <div class="tw-video-flex">
    <media-player
      load="visible" 
      posterLoad="visible"
      autoplay
      class="tw-video-w-full tw-video-max-h-[100vh] tw-video-aspect-video tw-video-bg-slate-900 tw-video-text-white tw-video-font-sans tw-video-overflow-hidden tw-video-rounded-md tw-video-ring-media-focus data-[focus]:tw-video-ring-4 md:tw-video-mx-auto"
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
          :src="posterUrl"
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
        <!-- <track
          :src="trackUrlDefault"
          kind="subtitles"
          label="English Default"
          lang="en-US"
          type="vtt"
          default
        /> -->
      </media-provider>
      <VideoLayout :thumbnails="thumnailUrlDefault" />
    </media-player>
  </div>
</template>
