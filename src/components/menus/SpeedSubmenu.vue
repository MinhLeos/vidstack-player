<script setup lang="ts">
import MenuRadio from './MenuRadio.vue';
import Submenu from './Submenu.vue';
</script>

<template>
  <Submenu label="Speed">
    <template #icon>
      <media-icon class="tw-video-h-5 tw-video-w-5" type="odometer" />
    </template>
    <template #content>
      <media-speed-radio-group class="tw-video-w-full tw-video-flex tw-video-flex-col">
        <template>
          <MenuRadio />
        </template>
      </media-speed-radio-group>
    </template>
  </Submenu>
</template>
