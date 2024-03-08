<script setup lang="ts">
import SubmenuButton from './SubmenuButton.vue';

const { label } = defineProps<{
  label: string;
}>();
</script>

<template>
  <media-menu>
    <SubmenuButton :label="label">
      <template #icon>
        <slot name="icon" />
      </template>
    </SubmenuButton>
    <media-menu-items
      class="tw-video-text-xs xsm:tw-video-text-sm tw-video-hidden tw-video-w-full tw-video-flex-col tw-video-items-start tw-video-justify-center tw-video-outline-none data-[keyboard]:tw-video-mt-[3px] data-[open]:tw-video-inline-block"
    >
      <slot name="content" />
    </media-menu-items>
  </media-menu>
</template>
