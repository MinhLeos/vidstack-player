<script setup lang="ts">
import type { TooltipPlacement } from 'vidstack';

import Tooltip from '../Tooltip.vue';

const { tooltipPlacement, isShow = true } = defineProps<{
  tooltipPlacement: TooltipPlacement;
  isShow: boolean
}>();
</script>

<template>
  <Tooltip v-if="isShow" :placement="tooltipPlacement">
    <template #trigger>
      <media-caption-button
        class="tw-video-ring-media-focus tw-video-group tw-video-relative tw-video-mr-0.5 tw-video-inline-flex tw-video-h-10 tw-video-w-10 tw-video-cursor-pointer tw-video-items-center tw-video-justify-center tw-video-rounded-md tw-video-outline-none tw-video-ring-inset hover:tw-video-bg-white/20 data-[focus]:tw-video-ring-4 aria-hidden:tw-video-hidden"
      >
        <media-icon class="media-captions:tw-video-block tw-video-hidden tw-video-h-8 tw-video-w-8" type="closed-captions-on" />
        <media-icon class="media-captions:tw-video-hidden tw-video-h-8 tw-video-w-8" type="closed-captions" />
      </media-caption-button>
      
    </template>

    <template #content>
      <span class="media-captions:tw-video-block tw-video-hidden">Closed-Captions Off</span>
      <span class="media-captions:tw-video-hidden">Closed-Captions On</span>
    </template>
  </Tooltip>
</template>
