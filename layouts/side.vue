<template>
  <div class="relative overflow-hidden">
    <icons-logo-moodsync class="absolute left-8 top-8 scale-75 xl:scale-100" />
    <sidebar v-if="this.$auth.user" />
    <user-dropdown
      class="absolute right-12 top-8 z-50"
      v-if="this.$auth.user"
    />
    <icons-waves-bottom-right class="absolute bottom-0 right-0" />
    <nuxt />
  </div>
</template>
