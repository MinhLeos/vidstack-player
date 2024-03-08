<script setup lang="ts">
const { thumbnails, noClamp = false } = defineProps<{
  thumbnails?: string;
  noClamp?: boolean;
}>();
</script>

<template>
  <media-slider-preview
    class="tw-video-flex tw-video-flex-col tw-video-items-center tw-video-opacity-0 tw-video-transition-opacity tw-video-duration-200 data-[visible]:tw-video-opacity-100 tw-video-pointer-events-none"
    :noClamp="noClamp"
  >
    <media-slider-thumbnail
      class="tw-video-block tw-video-h-[var(--thumbnail-height)] tw-video-max-h-[160px] tw-video-min-h-[80px] tw-video-w-[var(--thumbnail-width)] tw-video-min-w-[120px] tw-video-max-w-[180px] tw-video-overflow-hidden tw-video-border tw-video-border-white tw-video-bg-black"
      :src="thumbnails"
      v-if="thumbnails"
    />

    <slot />
  </media-slider-preview>
</template>
