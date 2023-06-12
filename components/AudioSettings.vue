<template>
  <div class="audio-settings">
    <font-awesome-icon
      @click="toggleMute"
      :icon="isMuted ? 'volume-off' : 'volume-up'"
      :color="isMuted ? '#f05252' : 'var(--dl-color-primary-600'"
    />
    <input
      type="range"
      v-model="volume"
      min="0"
      max="100"
      class="volume-slider"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMuted: false,
      volume: 50,
    };
  },
  methods: {
    toggleMute() {
      this.isMuted = !this.isMuted;
      if (this.isMuted) {
        this.volume = 0;
      } else {
        this.volume = 50;
      }
    },
  },
};
</script>

<style scoped>
.audio-settings {
  width: 200px;
  height: 56.38554382324219px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-evenly;
  flex-shrink: 0;
  border-color: rgba(229, 231, 235, 1);
  border-style: solid;
  border-width: 1px;
  border-radius: 18.610000610351562px;
  margin-left: 2px;
  margin-right: 2px;
}

.audio-settings font-awesome-icon {
  cursor: pointer;
  margin-right: 8px;
}
</style>
