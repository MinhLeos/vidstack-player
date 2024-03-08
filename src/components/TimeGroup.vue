<template>
  <div class="tw-video-ml-1.5 tw-video-flex tw-video-items-center tw-video-text-xs xsm:tw-video-text-sm tw-video-font-medium">
    <media-time class="time" type="current" />
    <div class="tw-video-mx-1 tw-video-text-white/80">/</div>
    <media-time class="time" type="duration" />
  </div>
</template>

<style scoped>
.time {
  contain: content;
}
</style>
