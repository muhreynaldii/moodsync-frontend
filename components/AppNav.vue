<template>
  <nav
    class="absolute left-[105px] top-[38px] flex w-[427px] items-center gap-10"
  >
    <nuxt-link to="/" class="contents">
      <img
        :alt="Rectangle8_alt"
        :src="Rectangle8_src"
        class="h-[50px] w-[50px] no-underline"
      />
    </nuxt-link>
    <nuxt-link to="/about" class="contents">
      <div
        class="flex h-[52px] w-[150px] shrink-0 items-center justify-center gap-[10px] p-[10px] no-underline"
      >
        <span class="h-auto text-[13px] text-black"><span>About</span></span>
      </div>
    </nuxt-link>
    <nuxt-link to="/features" class="contents">
      <div
        class="flex h-[52px] w-[150px] shrink-0 items-center justify-center gap-[10px] p-[10px] no-underline"
      >
        <span class="h-auto text-[13px] text-black"><span>Features</span></span>
      </div>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    Rectangle8_src: {
      type: String,
      default: "/assets/logo-200w.png",
    },
    Rectangle8_alt: {
      type: String,
      default: "Rectangle84462",
    },
    rootClassName: String,
  },
};
</script>

<style scoped>
/* .nav-root-class-name {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name1 {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name2 {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name3 {
  top: 38px;
  left: 105px;
  position: absolute;
}
.nav-root-class-name4 {
  top: 38px;
  left: 105px;
  position: absolute;
} */
</style>
