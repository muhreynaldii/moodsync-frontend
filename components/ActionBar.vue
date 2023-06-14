<template>
  <div>
    <div class="flex flex-row justify-between gap-2">
      <button
        @click="toggleCamera"
        class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-none border-Gray-200 bg-white text-[24px]"
      >
        <font-awesome-icon :icon="cameraIcon" />
      </button>
      <button
        @click="toggleMic"
        class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-none border-Gray-200 bg-white text-[24px]"
      >
        <font-awesome-icon
          :icon="isMicOn ? 'microphone' : 'microphone-slash'"
        />
      </button>
      <!-- <button
        class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-none border-Gray-200 bg-white text-[24px]"
      >
        <font-awesome-icon icon="desktop" />
      </button> -->
      <button
        class="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-none border-Gray-200 bg-white text-[24px]"
      >
        <icons-dot-horizontal />
      </button>
    </div>
  </div>
</template>

<script>
import { faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  data() {
    return {
      isMicOn: false,
      isCameraOn: true,
    };
  },
  computed: {
    cameraIcon() {
      return this.isCameraOn ? faVideo : faVideoSlash;
    },
  },
  methods: {
    toggleCamera() {
      this.isCameraOn = !this.isCameraOn;
    },
    toggleMic() {
      this.isMicOn = !this.isMicOn;
    },
  },
};
</script>

<style>
.fa-desktop {
  color: var(--dl-color-primary-600);
}
.fa-desktop:hover {
  color: var(--dl-color-primary-700);
}

.fa-microphone {
  color: var(--dl-color-primary-600);
}
.fa-microphone:hover {
  color: var(--dl-color-primary-700);
}
.fa-microphone-slash {
  color: #f05252;
}
.fa-video {
  color: var(--dl-color-primary-600);
}
.fa-video:hover {
  color: var(--dl-color-primary-700);
}

.fa-video-slash {
  color: #f05252;
}
</style>
