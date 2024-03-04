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
      <media-play-button
        class="ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4"
      >
        <media-icon class="media-paused:block hidden h-8 w-8" type="play" />
        <media-icon class="media-paused:hidden h-8 w-8" type="pause" />
      </media-play-button>
      <media-seek-button :seconds="+10" class="h-8 w-8">
          <media-icon type="seek-forward-10" class="h-8 w-8" mk-d></media-icon>
        </media-seek-button>
     <!-- Backward -10s on each press. -->
        <media-seek-button :seconds="-10" class="h-8 w-8">
          <media-icon type="seek-backward-10" class="h-8 w-8"></media-icon>
        </media-seek-button>
    </template>

    <template #content>
      <span class="media-paused:block hidden">Play</span>
      <span class="media-paused:hidden">Pause</span>
    </template>
  </Tooltip>
</template>
