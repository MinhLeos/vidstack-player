<script setup lang="ts">
const { label } = defineProps<{
  label: string;
}>();
</script>

<template>
  <media-menu-button
    class="tw-video-z-[9999] tw-video-bg-black hover:!tw-video-z-[9999] hover:!tw-video-bg-black tw-video-ring-media-focus tw-video-parent tw-video-left-0 tw-video-flex tw-video-w-full tw-video-cursor-pointer tw-video-select-none tw-video-items-center tw-video-justify-start tw-video-rounded-sm tw-video-p-2.5 tw-video-outline-none tw-video-ring-inset data-[open]:tw-video-sticky data-[open]:-tw-video-top-2.5 data-[hocus]:tw-video-bg-white/10 data-[focus]:tw-video-ring-[3px] aria-hidden:tw-video-hidden aria-disabled:tw-video-hidden"
  >
    <media-icon
      class="parent-data-[open]:tw-video-block -tw-video-ml-0.5 tw-video-mr-1.5 tw-video-hidden tw-video-h-[18px] tw-video-w-[18px]"
      type="chevron-left"
    />
    <div class="tw-video-contents parent-data-[open]:tw-video-hidden">
      <slot name="icon" />
    </div>
    <span class="tw-video-ml-1.5 parent-data-[open]:tw-video-ml-0">{{ label }}</span>
    <span class="tw-video-ml-auto tw-video-text-xs xsm:tw-video-text-sm tw-video-text-white/50" data-part="hint"></span>
    <media-icon
      class="parent-data-[open]:tw-video-hidden tw-video-ml-0.5 tw-video-h-[18px] tw-video-w-[18px] tw-video-text-sm tw-video-text-white/50"
      type="chevron-right"
    />
  </media-menu-button>
</template>
