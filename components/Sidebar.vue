<template>
  <div
    class="absolute left-[11px] top-[181.5px] flex flex-col items-start gap-[15.75px] xl:left-[28px] xl:top-[238px] xl:gap-[21px]"
  >
    <div
      v-for="(link, index) in mappedLinks"
      :key="index"
      class="scale-75 xl:scale-100"
    >
      <nuxt-link :to="link.to">
        <div
          :class="{
            'relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-[#e1effe] no-underline shadow-[5px_5px_10px_0_#d4d4d4]':
              link.isActive,
            'relative flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-white no-underline shadow-[5px_5px_10px_0_#d4d4d4]':
              !link.isActive,
          }"
        >
          <component
            :is="link.icon"
            class="absolute left-[10px] top-[10px] h-[30px] w-[30px]"
          />
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksData: [
        { to: "dashboard-dosen", icon: "icons-dashboard" },
        { to: "vicon-started", icon: "icons-vicon" },
        { to: "daftar-mahasiswa", icon: "icons-daftar" },
        { to: "notification", icon: "icons-notif" },
      ],
    };
  },
  computed: {
    mappedLinks() {
      return this.linksData.map((link) => ({
        to: link.to,
        isActive: this.$route.name === link.to,
        icon: this.$route.name === link.to ? `${link.icon}-blue` : link.icon,
      }));
    },
  },
};
</script>
