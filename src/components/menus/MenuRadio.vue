<template>
  <media-radio
    class="tw-video-ring-media-focus tw-video-group tw-video-relative tw-video-flex tw-video-w-full tw-video-cursor-pointer tw-video-select-none tw-video-items-center tw-video-justify-start tw-video-rounded-sm tw-video-p-2.5 tw-video-outline-none data-[hocus]:tw-video-bg-white/10 data-[focus]:tw-video-ring-[3px]"
  >
    <media-icon class="tw-video-h-4 tw-video-w-4 tw-video-text-white group-data-[checked]:tw-video-hidden" type="radio-button" />
    <media-icon
      class="tw-video-text-media-brand tw-video-hidden tw-video-h-4 tw-video-w-4 group-data-[checked]:tw-video-block"
      type="radio-button-selected"
    />
    <span class="ml-2" data-part="label"></span>
  </media-radio>
</template>
