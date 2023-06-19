<template>
  <div class="relative">
    <img
      v-if="dot"
      src="~icons/dot-decoration.png"
      alt="dot-decoration"
      class="absolute -left-[57px] -top-[46px] h-fit w-fit"
    />
    <h1 class="text-[48.75px] leading-[120%] text-black xl:text-[65px]">
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    dot: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
