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
      <media-mute-button
        class="tw-video-ring-media-focus tw-video-group tw-video-relative -tw-video-mr-1.5 tw-video-inline-flex tw-video-h-10 tw-video-w-10 tw-video-cursor-pointer tw-video-items-center tw-video-justify-center tw-video-rounded-md tw-video-outline-none tw-video-ring-inset hover:tw-video-bg-white/20 data-[focus]:tw-video-ring-4"
      >
        <media-icon class="tw-video-hidden tw-video-h-8 tw-video-w-8 group-data-[state='muted']:tw-video-block" type="mute" />
        <media-icon class="tw-video-hidden tw-video-h-8 tw-video-w-8 group-data-[state='low']:tw-video-block" type="volume-low" />
        <media-icon class="tw-video-hidden tw-video-h-8 tw-video-w-8 group-data-[state='high']:tw-video-block" type="volume-high" />
      </media-mute-button>
    </template>

    <template #content>
      <span class="media-muted:tw-video-hidden">Mute</span>
      <span class="media-muted:tw-video-block tw-video-hidden">Unmute</span>
    </template>
  </Tooltip>
</template>
