<template>
  <div class="flex relative" v-bind:class="rootClassName">
    <img
      :alt="Bg_Bawah_alt"
      :src="Bg_Bawah_src"
      class="w-[729px] bottom-0 right-0 m-auto fixed self-end"
    />
  </div>
</template>

<script>
export default {
  name: "BgBawah",
  props: {
    Bg_Bawah_alt: {
      type: String,
      default: "pastedImage",
    },
    rootClassName: String,
    Bg_Bawah_src: {
      type: String,
      default: "/assets/pastedimage-jqvi.svg",
    },
  },
};
</script>

<style scoped>
.bg-bawah-root-class-name {
  right: 0px;
  bottom: 0px;
  position: absolute;
  align-self: flex-end;
}
.bg-bawah-root-class-name1 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name2 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name3 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name4 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name5 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name6 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name7 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name8 {
  right: 0px;
  bottom: 0px;
  position: absolute;
  align-self: flex-end;
}
.bg-bawah-root-class-name9 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name10 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
.bg-bawah-root-class-name11 {
  right: 0px;
  bottom: 0px;
  position: absolute;
}
</style>
