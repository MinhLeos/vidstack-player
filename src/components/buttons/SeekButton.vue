<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack'

import Tooltip from '../Tooltip.vue'

const { tooltipPlacement, isForward } = defineProps<{
  tooltipPlacement: TooltipPlacement,
  isForward?: boolean
}>()
</script>

<template>
  <Tooltip :placement="tooltipPlacement">
    <template #trigger>
        <media-seek-button v-if="isForward" :seconds="+10" class="tw-video-shrink-0 tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8">
            <media-icon type="seek-forward-10" class="tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8" mk-d></media-icon>
        </media-seek-button>
      <!-- Backward -10s on each press. -->
        <media-seek-button v-else :seconds="-10" class="tw-video-shrink-0 tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8">
            <media-icon type="seek-backward-10" class="tw-video-h-6 tw-video-w-6 xsm:tw-video-h-8 xsm:tw-video-w-8"></media-icon>
        </media-seek-button>
    </template>
    <template #content>
        <span v-if="isForward" class="seek-forward:tw-video-hidden">Seek Forward</span>
        <span v-else class="seek-backward:tw-video-hidden">Seek Backward</span>
    </template>
  </Tooltip>
</template>
