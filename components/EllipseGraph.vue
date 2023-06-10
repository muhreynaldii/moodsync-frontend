<template>
  <div>
    <vue-ellipse-progress
      :data="circles"
      :progress="progress"
      :angle="90"
      color="#1C64F2"
      emptyColor="#EBF5FF"
      :size="80"
      :thickness="8"
      emptyThickness="10%"
      :legend="true"
      :legendValue="progress"
      animation="bounce 1000 300"
      fontColor="Black"
      :gap="10"
      dot="5 #0053F8"
      fontSize="16px"
      lineMode="normal"
    />

    <p class="text-center text-[13px]">{{ emotion }}</p>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
    emotion: {
      type: String,
    },
    circles: {
      type: Number,
    },
  },
};
</script>
