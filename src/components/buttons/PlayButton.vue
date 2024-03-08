<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack'

import Tooltip from '../Tooltip.vue'

const { tooltipPlacement } = defineProps<{
  tooltipPlacement: TooltipPlacement
}>()
</script>

<template>
  <Tooltip :placement="tooltipPlacement">
    <template #trigger>
      <media-play-button
        class="tw-video-ring-media-focus tw-video-relative tw-video-inline-flex tw-video-h-8 tw-video-w-8 xsm:tw-video-h-10 xsm:tw-video-w-10 tw-video-cursor-pointer tw-video-items-center tw-video-justify-center tw-video-rounded-md tw-video-outline-none tw-video-ring-inset hover:tw-video-bg-white/20 data-[focus]:tw-video-ring-4"
      >
        <media-icon class="media-paused:tw-video-block tw-video-hidden tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8" type="play" />
        <media-icon class="media-paused:tw-video-hidden tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8" type="pause" />
      </media-play-button>
      <!-- Backward -10s on each press. -->
      <!-- <media-seek-button :seconds="-10" class="tw-video-shrink-0 tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8">
        <media-icon type="seek-backward-10" class="tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8"></media-icon>
      </media-seek-button>
      <media-seek-button :seconds="+10" class="tw-video-shrink-0 tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8">
        <media-icon type="seek-forward-10" class="tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8" mk-d></media-icon>
      </media-seek-button> -->
    </template>

    <template #content>
      <span class="media-paused:tw-video-block tw-video-hidden">Play</span>
      <span class="media-paused:tw-video-hidden">Pause</span>
    </template>
  </Tooltip>
</template>
