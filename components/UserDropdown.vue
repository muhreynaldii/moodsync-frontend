<template>
  <div @mouseover="showDropdown" @mouseleave="hideDropdown">
    <div class="flex w-[100px] items-center">
      <img
        src="~img/user-profile-example.png"
        alt="user-profile-example"
        class="rounded-full"
      />
      <icons-arrow-down
        class="ml-[10px]"
        v-show="isDropdownVisible === false"
      />
      <icons-arrow-up class="ml-[10px]" v-show="isDropdownVisible" />
    </div>
    <div
      v-show="isDropdownVisible"
      class="mt-2 flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg px-2 py-2 shadow-md hover:bg-slate-100"
    >
      <icons-logout />
      <p class="pl-1 text-black">Logout</p>
    </div>
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
  },
};
</script>
