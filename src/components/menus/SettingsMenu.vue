<script setup lang="ts">
import type { MenuPlacement, TooltipPlacement } from 'vidstack'

import CaptionSubmenu from '../menus/CaptionSubmenu.vue'
import SpeedSubmenu from '../menus/SpeedSubmenu.vue'
import QualitySubmenu from '../menus/QualitySubmenu.vue'
import Menu from '../menus/Menu.vue'

const {
  placement,
  tooltipPlacement,
  isMobile,
  isHorizontalScreen
} = defineProps<{
  placement: MenuPlacement
  tooltipPlacement: TooltipPlacement
  isMobile: boolean
  isHorizontalScreen: boolean
}>()
</script>

<template>
  <Menu
    :isHorizontalScreen="isHorizontalScreen"
    :isMobile="isMobile"
    :placement="placement"
    :tooltip-placement="tooltipPlacement"
  >
    <template #button>
      <media-icon
        class="tw-video-h-8 tw-video-w-8 tw-video-transform tw-video-transition-transform tw-video-duration-200 tw-video-ease-out group-data-[open]:tw-video-rotate-90"
        type="settings"
      />
    </template>
    <template #content>
      <CaptionSubmenu />
      <SpeedSubmenu />
      <QualitySubmenu />
    </template>
    <template #tooltip-content>
      <span>Settings</span>
    </template>
  </Menu>
</template>
