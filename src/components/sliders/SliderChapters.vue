<template>
  <media-slider-chapters class="tw-video-relative tw-video-flex tw-video-h-full tw-video-w-full tw-video-items-center tw-video-rounded-[1px]">
    <template>
      <!-- Chapter -->
      <div
        class="chapter last-child:tw-video-mr-0 tw-video-relative tw-video-mr-0.5 tw-video-flex tw-video-h-full tw-video-w-full tw-video-items-center tw-video-rounded-[1px]"
      >
        <!-- Track -->
        <div
          class="tw-video-ring-media-focus tw-video-relative tw-video-z-0 tw-video-h-[5px] tw-video-w-full tw-video-rounded-sm tw-video-bg-white/30 group-data-[focus]:tw-video-ring-[3px]"
        >
          <div
            class="tw-video-bg-media-brand tw-video-absolute tw-video-h-full tw-video-w-[var(--chapter-fill)] tw-video-rounded-sm tw-video-will-change-[width]"
          />
          <div
            class="tw-video-absolute tw-video-z-10 tw-video-h-full tw-video-w-[var(--chapter-progress)] tw-video-rounded-sm tw-video-bg-white/50 tw-video-will-change-[width]"
          />
        </div>
      </div>
    </template>
  </media-slider-chapters>
</template>

<style scoped>
.chapter {
  contain: layout style;
}

.track {
  contain: strict;
}
</style>
