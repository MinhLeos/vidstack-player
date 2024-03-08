<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CaptionButton from '../buttons/CaptionButton.vue'
import FullscreenButton from '../buttons/FullscreenButton.vue'
import MuteButton from '../buttons/MuteButton.vue'
import SeekButton from '../buttons/SeekButton.vue'
import PIPButton from '../buttons/PIPButton.vue'
import PlayButton from '../buttons/PlayButton.vue'
import Captions from '../Captions.vue'
import ChapterTitle from '../ChapterTitle.vue'
import Gestures from '../Gestures.vue'
import SettingsMenu from '../menus/SettingsMenu.vue'
import TimeSlider from '../sliders/TimeSlider.vue'
import VolumeSlider from '../sliders/VolumeSlider.vue'
import TimeGroup from '../TimeGroup.vue'

const { thumbnails } = defineProps<{
  thumbnails?: string
}>()
const isHorizontalScreen = ref(false)
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth <= 640
  isHorizontalScreen.value = window.innerWidth > window.innerHeight

  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth <= 640
    isHorizontalScreen.value = window.innerWidth > window.innerHeight
  })
})
</script>

<template>
  <Gestures />
  <Captions />
  <media-controls
    class="media-controls:tw-video-opacity-100 tw-video-absolute tw-video-inset-0 tw-video-z-10 tw-video-flex tw-video-h-full tw-video-w-full tw-video-flex-col tw-video-bg-gradient-to-t tw-video-from-black/10 tw-video-to-transparent tw-video-opacity-0 tw-video-transition-opacity"
  >
    <div class="tw-video-flex-1" />
    <!-- <media-controls-group class="tw-video-h-8 tw-video-h-10 tw-video-flex tw-video-w-full items-center px-2">
      <PlayButton tooltip-placement="top center" />
    </media-controls-group> -->
    <media-controls-group class="tw-video-h-8 xsm:tw-video-h-10 tw-video-flex tw-video-w-full items-center px-2">
      <TimeSlider :thumbnails="thumbnails" />
    </media-controls-group>
    <media-controls-group class="tw-video-h-8 xsm:tw-video-h-10 -tw-video-mt-0.5 xsm:tw-video-mt-1 md:tw-video-mt-2 tw-video-flex tw-video-w-full tw-video-items-center tw-video-px-2 tw-video-pb-2 tw-video-gap-3 xsm:tw-video-gap-5">
      <PlayButton tooltip-placement="top start" />
      <SeekButton tooltip-placement="top" />
      <SeekButton isForward tooltip-placement="top" />
      <MuteButton tooltip-placement="top" />
      <VolumeSlider />
      <TimeGroup />
      <!-- <ChapterTitle class="hidden md:block" /> -->
      <div class="tw-video-flex-1" />
      <div class="tw-video-flex tw-video-absolute tw-video-top-0 tw-video-right-0 xsm:tw-video-relative">
        <CaptionButton :is-show="!isMobile" tooltip-placement="top" />
        <SettingsMenu
          :isMobile="isMobile"
          :isHorizontalScreen="isHorizontalScreen"
          :placement="isMobile ? 'bottom end' : 'top end'"
          tooltip-placement="top"
        />
        <!-- <PIPButton :is-show="!isMobile" tooltip-placement="top" /> -->
        <FullscreenButton tooltip-placement="top end" />
      </div>
    </media-controls-group>
  </media-controls>
</template>

<style scoped>
media-controls {
  /* These CSS variables are supported out of the box to easily apply offsets to all tooltips/menus.  */
  --media-tooltip-y-offset: 30px;
  --media-menu-y-offset: 30px;
}

media-controls :deep(media-volume-slider) {
  --media-slider-preview-offset: 30px;
}
</style>
