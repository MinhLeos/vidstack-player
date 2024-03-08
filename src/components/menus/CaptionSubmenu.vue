<script setup lang="ts">
import MenuRadio from './MenuRadio.vue';
import Submenu from './Submenu.vue';
</script>

<template>
  <Submenu label="Captions">
    <template #icon>
      <media-icon class="tw-video-h-5 tw-video-w-5" type="closed-captions" />
    </template>
    <template #content>
      <media-captions-radio-group class="tw-video-w-full tw-video-flex tw-video-flex-col">
        <template>
          <MenuRadio />
        </template>
      </media-captions-radio-group>
    </template>
  </Submenu>
</template>
