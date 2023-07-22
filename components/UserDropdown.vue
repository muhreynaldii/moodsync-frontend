<template>
  <div @mouseover="showDropdown" @mouseleave="hideDropdown">
    <div class="flex w-[100px] items-center">
      <p class="text-black">{{ this.$auth.user }}</p>
      <icons-arrow-down
        class="ml-[10px]"
        v-show="isDropdownVisible === false"
      />
      <icons-arrow-up class="ml-[10px]" v-show="isDropdownVisible" />
    </div>
    <button
      v-show="isDropdownVisible"
      class="mt-2 flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg px-2 py-2 shadow-md hover:bg-red-50"
      @click="logout"
    >
      <icons-logout />
      <p class="pl-1 text-black">Logout</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
    };
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    async logout() {
      await this.$auth.logout();
    },
  },
};
</script>
