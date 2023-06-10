<template>
  <div class="absolute left-[26px] top-60 flex flex-col items-start gap-[21px]">
    <div v-for="(link, index) in links" :key="index">
      <nuxt-link :to="link.to" class="contents">
        <div
          :class="{
            'relative flex h-[50px] w-[50px] shrink-0 items-start rounded-[50%] bg-[#e1effe] no-underline shadow-[5px_5px_10px_0_#d4d4d4]':
              link.isActive,
            'relative flex h-[50px] w-[50px] shrink-0 items-start rounded-[50%] bg-white no-underline shadow-[5px_5px_10px_0_#d4d4d4]':
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
    const linksData = [
      { to: "dashboard-dosen", icon: "icons-dashboard" },
      { to: "vicon-started", icon: "icons-vicon" },
      { to: "daftar-mahasiswa", icon: "icons-daftar" },
      { to: "notification", icon: "icons-notif" },
    ];

    return {
      links: linksData.map((link) => ({
        to: link.to,
        isActive: this.$route.name === link.to,
        icon: this.$route.name === link.to ? `${link.icon}-blue` : link.icon,
      })),
    };
  },
};
</script>
