<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack';

import Tooltip from '../Tooltip.vue';

const { tooltipPlacement } = defineProps<{
  tooltipPlacement: TooltipPlacement;
}>();
</script>

<template>
  <Tooltip :placement="tooltipPlacement">
    <template #trigger>
      <media-fullscreen-button
        class="tw-video-ring-media-focus tw-video-group tw-video-relative tw-video-inline-flex tw-video-h-10 tw-video-w-10 tw-video-cursor-pointer tw-video-items-center tw-video-justify-center tw-video-rounded-md tw-video-outline-none tw-video-ring-inset hover:tw-video-bg-white/20 data-[focus]:tw-video-ring-4 aria-hidden:tw-video-hidden"
      >
        <media-icon class="media-fullscreen:tw-video-hidden tw-video-h-8 tw-video-w-8" type="fullscreen" />
        <media-icon class="media-fullscreen:tw-video-block tw-video-hidden tw-video-h-8 tw-video-w-8" type="fullscreen-exit" />
      </media-fullscreen-button>
    </template>

    <template #content>
      <span class="media-fullscreen:tw-video-hidden">Enter Fullscreen</span>
      <span class="media-fullscreen:tw-video-block tw-video-hidden">Exit Fullscreen</span>
    </template>
  </Tooltip>
</template>
