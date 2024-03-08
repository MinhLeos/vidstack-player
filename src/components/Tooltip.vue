<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack';

const { placement } = defineProps<{
  placement: TooltipPlacement;
}>();
</script>

<template>
  <media-tooltip>
    <media-tooltip-trigger>
      <slot name="trigger" />
    </media-tooltip-trigger>
    <media-tooltip-content
      class="tooltip tw-video-animate-out tw-video-fade-out tw-video-slide-out-to-bottom-2 data-[visible]:tw-video-animate-in data-[visible]:tw-video-fade-in data-[visible]:tw-video-slide-in-from-bottom-4 tw-video-z-10 tw-video-rounded-sm tw-video-bg-black/90 tw-video-px-2 tw-video-py-0.5 tw-video-text-sm tw-video-font-medium tw-video-text-white"
      :placement="placement"
    >
      <slot name="content" />
    </media-tooltip-content>
  </media-tooltip>
</template>

<style scoped>
media-menu[data-open] .tooltip {
  display: none !important;
}
</style>
