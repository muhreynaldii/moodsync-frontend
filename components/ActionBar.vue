<template>
  <div>
    <div class="flex flex-row justify-between gap-2">
      <button
        @click="toggleCamera"
        class="tooltip flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-[#E5E7EB] bg-white text-[24px]"
      >
      <span class="tooltiptext">Toggle Camera</span>
        <font-awesome-icon :icon="cameraIcon" />
      </button>
      <button
        @click="toggleMic"
        class="tooltip flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[18px] border-[1px] border-[#E5E7EB] bg-white text-[24px]"
      >
      <span class="tooltiptext">Toggle Mic</span>
        <font-awesome-icon
          :icon="isMicOn ? 'microphone' : 'microphone-slash'"
        />
      </button>
      <button
        class="tooltip flex h-[60px] w-[60px] items-center justify-center rounded-[18px] border border-[#E5E7EB]"
        @click="toggleScreenSharing"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--dl-color-primary-600)"
          class="hover:fill-blue-700 icon h-[30px] w-[30px]"
        >
          <path
            d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z"
            :class="{ hovered: isHovered }"
          />
        </svg>
        <span class="tooltiptext">Toggle Share Screen</span>
      </button>
      <button
        class="tooltip flex h-[60px] w-[60px] items-center justify-center rounded-[18px] border border-[#E5E7EB]"
        @click="$emit('open-chat')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--dl-color-primary-600)"
          class="hover:fill-blue-700 icon h-[30px] w-[30px]"
        >
          <path
            fill-rule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clip-rule="evenodd"
            :class="{ hovered: isHovered }"
          />
        </svg>
        <span class="tooltiptext">Toggle Chat</span>
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
      isCameraOn: true,
      isMicOn: true,
      isScreenSharing: false,
      isHovered: false,
    };
  },
  methods: {
    toggleCamera() {
      this.isCameraOn = !this.isCameraOn;
      this.$emit("on-camera", this.isCameraOn);
    },
    toggleMic() {
      this.isMicOn = !this.isMicOn;
      this.$emit("toggle-mic", this.isMicOn);
    },
    toggleScreenSharing() {
      this.isScreenSharing = !this.isScreenSharing;
      this.$emit("share-Screen", this.isScreenSharing);
    },
  },
  computed: {
    cameraIcon() {
      if (this.isCameraOn === true) return faVideo;
      if (this.isCameraOn === false) return faVideoSlash;
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
.hovered {
  fill: var(
    --dl-color-primary-700
  ); /* Ganti dengan warna yang diinginkan saat di hover */
}
/* Tooltip container */
.tooltip {
  position: relative;
}

/* Tooltip text */
.tooltip .tooltiptext {
  font-size: 12px;
  visibility: hidden;
  width: 120px;
  background-color: var(--dl-color-primary-600);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  opacity: 0;
  transition: opacity 1s;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: var(--dl-color-primary-600) transparent transparent transparent;
}
</style>
