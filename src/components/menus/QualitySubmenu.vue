<script setup lang="ts">
import MenuRadio from './MenuRadio.vue';
import Submenu from './Submenu.vue';
</script>

<template>
  <Submenu label="Quality">
    <template #icon>
      <media-icon class="h-5 w-5" type="settings-menu" />
    </template>
    <template #content>
      <media-quality-radio-group class="vds-captions-radio-group vds-radio-group">
        <template>
          <MenuRadio />
        </template>
      </media-quality-radio-group>
      
    </template>
  </Submenu>
</template>
