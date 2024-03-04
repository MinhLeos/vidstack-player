<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CaptionButton from '../buttons/CaptionButton.vue'
import FullscreenButton from '../buttons/FullscreenButton.vue'
import MuteButton from '../buttons/MuteButton.vue'
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
const isMobile = ref(false)

onMounted(() => {
  console.log('---', document.body.clientWidth)
  isMobile.value = document.body.clientWidth <= 768
  console.log('--- isMobile.value', isMobile.value)
})
</script>

<template>
  <Gestures />
  <Captions />
  <media-controls
    class="media-controls:opacity-100 absolute inset-0 z-10 flex h-full w-full flex-col bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity"
  >
    <div class="flex-1" />
    <media-controls-group class="flex w-full items-center px-2">
      <TimeSlider :thumbnails="thumbnails" />
    </media-controls-group>
    <media-controls-group class="-mt-0.5 flex w-full items-center px-2 pb-2">
      <PlayButton tooltip-placement="top start" />
      <MuteButton tooltip-placement="top" />
      <VolumeSlider />
      <TimeGroup />
      <ChapterTitle />
      <div class="flex-1" />
      <div class="flex absolute top-0 right-0 md:relative">
        <CaptionButton tooltip-placement="top" />
        <SettingsMenu :placement="isMobile ? 'bottom end' : 'top end'" tooltip-placement="top" />
        <PIPButton tooltip-placement="top" />
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
