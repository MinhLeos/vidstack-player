<script setup lang="ts">
import SliderChapters from './SliderChapters.vue';
import SliderPreview from './SliderPreview.vue';
import SliderThumb from './SliderThumb.vue';

const { thumbnails } = defineProps<{
  thumbnails?: string;
}>();
</script>

<template>
  <media-time-slider
    class="tw-video-group tw-video-relative tw-video-mx-[7.5px] inline-tw-video-flex tw-video-h-10 tw-video-w-full tw-video-cursor-pointer tw-video-touch-none tw-video-select-none tw-video-items-center tw-video-outline-none"
  >
    <SliderChapters />
    <SliderThumb />
    <SliderPreview :thumbnails="thumbnails">
      <!-- <div class="tw-video-mt-2 text-sm" data-part="chapter-title" /> -->
      <media-slider-value class="tw-video-text-[13px]" />
    </SliderPreview>
  </media-time-slider>
</template>
