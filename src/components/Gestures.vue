<template>
  <media-gesture
    class="tw-video-absolute tw-video-inset-0 tw-video-z-0 tw-video-block tw-video-h-full tw-video-w-full"
    event="pointerup"
    action="toggle:paused"
  />
  <media-gesture
    class="tw-video-absolute tw-video-inset-0 tw-video-z-0 tw-video-block tw-video-h-full tw-video-w-full"
    event="dblpointerup"
    action="toggle:fullscreen"
  />
  <media-gesture
    class="tw-video-absolute tw-video-left-0 tw-video-top-0 tw-video-z-10 tw-video-block tw-video-h-full tw-video-w-1/5"
    event="dblpointerup"
    action="seek:-10"
  />
  <media-gesture
    class="tw-video-absolute tw-video-right-0 tw-video-top-0 tw-video-z-10 tw-video-block tw-video-h-full tw-video-w-1/5"
    event="dblpointerup"
    action="seek:10"
  />
</template>
