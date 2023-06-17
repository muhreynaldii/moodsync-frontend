<template>
  <nav
    class="absolute left-[100px] top-[38px] flex w-[320.25px] items-center justify-between xl:w-[427px]"
  >
    <div v-for="(link, index) in links" :key="index">
      <nuxt-link :to="link.to">
        <div class="flex h-fit w-fit items-center justify-center no-underline">
          <img
            v-if="link.img"
            :src="link.img"
            alt="img"
            class="h-[35.25px] w-[35.25px] xl:h-[47px] xl:w-[47px]"
          />
          <span
            v-if="link.label"
            class="h-auto cursor-pointer text-[12px] font-[600] text-black xl:text-[16px]"
            >{{ link.label }}</span
          >
        </div>
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
import logoMoodsync from "../assets/icons/logo-moodsync.svg";
export default {
  name: "Nav",
  data() {
    return {
      links: [
        { to: "/", img: logoMoodsync },
        { to: "/about", label: "About" },
        { to: "/features", label: "Features" },
      ],
    };
  },
};
</script>
