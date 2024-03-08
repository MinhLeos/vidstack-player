<script setup lang="ts">
import type { MenuPlacement, TooltipPlacement } from 'vidstack'

import Tooltip from '../Tooltip.vue'

const { placement, tooltipPlacement, isMobile, isHorizontalScreen } = defineProps<{
  placement: MenuPlacement
  tooltipPlacement: TooltipPlacement
  isMobile: boolean
  isHorizontalScreen: boolean
}>()
//!fixed !tw-video-top-[unset] !left-0 !bottom-0 !w-full
</script>

<template>
  <media-menu>
    <!-- Menu Button -->
    <Tooltip :placement="tooltipPlacement">
      <template #trigger>
        <media-menu-button
          class="tw-video-group tw-video-ring-media-focus tw-video-relative tw-video-mr-0.5 tw-video-inline-flex tw-video-h-10 tw-video-w-10 tw-video-cursor-pointer tw-video-items-center tw-video-justify-center tw-video-rounded-md tw-video-outline-none tw-video-ring-inset hover:tw-video-bg-white/20 data-[focus]:tw-video-ring-4 aria-hidden:tw-video-hidden"
        >
          <slot name="button" />
        </media-menu-button>
      </template>
      <template #content>
        <slot name="tooltip-content" />
      </template>
    </Tooltip>
    <!-- Menu Items -->
    <media-menu-items
      :class="`${isMobile ? '!tw-video-bottom-[unset] !tw-video-left-[unset] !tw-video-tw-video-right-20 !tw-video-tw-video-top-1 !tw-video-w-full !tw-video-max-w-[260px] max-height-custom' : ''} ${isMobile && isHorizontalScreen ? '!tw-video-max-h-[260px]' : ''}`"
      class="tw-video-text-xs xsm:tw-video-tw-video-text-sm !tw-video-z-20 tw-video-animate-out tw-video-fade-out tw-video-slide-out-to-bottom-2 data-[open]:tw-video-animate-in data-[open]:tw-video-fade-in data-[open]:tw-video-slide-in-from-bottom-4 tw-video-flex tw-video-h-[var(--menu-height)] tw-video-max-h-[260px] md:tw-video-max-h-[300px] lg:tw-video-max-h-[400px] tw-video-min-w-[240px] tw-video-flex-col tw-video-overflow-y-auto tw-video-overscroll-y-contain tw-video-rounded-md tw-video-border tw-video-border-white/10 tw-video-bg-black/95 tw-video-p-2.5 tw-video-font-sans tw-video-text-[15px] tw-video-font-medium tw-video-outline-none tw-video-backdrop-blur-sm tw-video-transition-[height] tw-video-duration-300 tw-video-will-change-[height] data-[resizing]:tw-video-overflow-hidden"
      :placement="placement"
    >
      <slot name="content" />
    </media-menu-items>
  </media-menu>
</template>
<style scoped lang="scss">
.max-height-custom {
  max-height: calc(100% + 110px) !important;
}
</style>
