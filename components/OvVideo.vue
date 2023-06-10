<template>
  <video class="vicon-lecturer" autoplay />
</template>

<script>
export default {
  name: "OvVideo",

  props: {
    streamManager: Object,
  },

  mounted() {
    this.streamManager.addVideoElement(this.$el);
  },
};
</script>

<style scoped>
.vicon-lecturer {
  top: 0px;
  left: 0px;
  width: 970.75px;
  height: 726px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 33px;
}

</style>