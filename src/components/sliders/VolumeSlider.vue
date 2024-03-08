<script setup lang="ts">
import SliderPreview from './SliderPreview.vue';
import SliderThumb from './SliderThumb.vue';
</script>

<template>
  <media-volume-slider
    class="tw-video-inline-flex tw-video-group tw-video-relative tw-video-mx-[7.5px] tw-video-h-10 tw-video-w-full tw-video-max-w-[80px] tw-video-cursor-pointer tw-video-touch-none tw-video-select-none tw-video-items-center tw-video-outline-none aria-hidden:tw-video-hidden"
  >
    <!-- Track -->
    <div
      class="tw-video-ring-media-focus tw-video-relative tw-video-z-0 tw-video-h-[5px] tw-video-w-full tw-video-rounded-sm tw-video-bg-white/30 group-data-[focus]:tw-video-ring-[3px]"
    >
      <div
        class="tw-video-bg-media-brand tw-video-absolute tw-video-h-full tw-video-w-[var(--slider-fill)] tw-video-rounded-sm tw-video-will-change-[width]"
      />
    </div>
    <SliderThumb />
    <SliderPreview no-clamp>
      <media-slider-value class="tw-video-rounded-sm tw-video-bg-black tw-video-px-2 tw-video-py-px tw-video-text-[13px] tw-video-font-medium" />
    </SliderPreview>
  </media-volume-slider>
</template>
