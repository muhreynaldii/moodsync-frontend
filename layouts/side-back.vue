<template>
  <div class="relative overflow-hidden">
    <icons-logo-moodsync class="hover:animate-bounce absolute left-8 top-8 scale-75 xl:scale-100" />
    <button class="absolute left-32 top-8 scale-75 xl:scale-100  bg-blue-600 hover:bg-blue-700 px-3 py-3 rounded-Radius8" @click="goBack">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
    <sidebar v-if="this.$auth.user" />
    <user-dropdown
      class="absolute right-12 top-8 z-50"
      v-if="this.$auth.user"
    />
    <icons-waves-bottom-right class="absolute bottom-0 right-0" />
    <nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  }
};
</script>