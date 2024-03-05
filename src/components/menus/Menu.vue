<script setup lang="ts">
import type { MenuPlacement, TooltipPlacement } from 'vidstack'

import Tooltip from '../Tooltip.vue'

const { placement, tooltipPlacement, isMobile, isHorizontalScreen } = defineProps<{
  placement: MenuPlacement
  tooltipPlacement: TooltipPlacement
  isMobile: boolean
  isHorizontalScreen: boolean
}>()
</script>

<template>
  <media-menu>
    <!-- Menu Button -->
    <Tooltip :placement="tooltipPlacement">
      <template #trigger>
        <media-menu-button
          class="group ring-media-focus relative mr-0.5 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4 aria-hidden:hidden"
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
      :class="`${isMobile ? '!fixed !top-[unset] !left-0 !bottom-0 !w-full' : ''} ${isHorizontalScreen ? '!max-h-[300px]' : ''}`"
      class="animate-out fade-out slide-out-to-bottom-2 data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4 flex h-[var(--menu-height)] max-h-[400px] min-w-[260px] flex-col overflow-y-auto overscroll-y-contain rounded-md border border-white/10 bg-black/95 p-2.5 font-sans text-[15px] font-medium outline-none backdrop-blur-sm transition-[height] duration-300 will-change-[height] data-[resizing]:overflow-hidden"
      :placement="placement"
    >
      <slot name="content" />
    </media-menu-items>
  </media-menu>
</template>
