<template>
  <div class="bg-atas-container" v-bind:class="rootClassName">
    <img :alt="Bg_Atas_alt" :src="Bg_Atas_src" class="bg-atas-bg-atas" />
  </div>
</template>

<script>
export default {
  name: 'BgAtas',
  props: {
    Bg_Atas_src: {
      type: String,
      default: '/playground_assets/pastedimage-7k7o.svg',
    },
    Bg_Atas_alt: {
      type: String,
      default: 'pastedImage',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.bg-atas-container {
  display: flex;
  position: relative;
}
.bg-atas-bg-atas {
  width: 842px;
  height: 467px;
  position: relative;
}
.bg-atas-root-class-name {
  top: 0px;
  left: 0px;
  position: absolute;
}
.bg-atas-root-class-name1 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.bg-atas-root-class-name2 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.bg-atas-root-class-name3 {
  top: 0px;
  left: 0px;
  position: absolute;
}
.bg-atas-root-class-name4 {
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>
