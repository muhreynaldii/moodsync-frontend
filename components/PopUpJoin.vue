<template>
  <div
    class="fixed inset-0 flex h-screen w-screen items-center justify-center bg-[#242424]/50"
  >
    <div
      class="relative flex h-[341.14px] w-[533.45px] flex-col items-center rounded-[13px] bg-white"
      @click.stop=""
    >
      <form
        @submit.prevent="pushData()"
        class="flex flex-col justify-center p-[16.26px]"
      >
        <label
          class="mb-[13px] text-center text-[22.77px] font-medium text-[#111928]"
          >Nama</label
        >
        <input
          v-model="itsUserName"
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px]"
          type="text"
          placeholder="Masukkan Nama Lengkap"
          required
        />
        <label
          class="mb-[13px] text-center text-[22.77px] font-medium text-[#111928]"
          >Room</label
        >
        <input
          v-model="itsSessionId"
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px]"
          type="text"
          placeholder="Masukkan Kode Ruangan"
          required
        />
        <p class="text-center">
          <button
            class="h-[48px] w-[119px] rounded-[8px] bg-[#1C64F2] text-white"
          >
            Join!
          </button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itsUserName: this.$auth.user || "",
      itsSessionId: "",
    };
  },
  methods: {
    pushData() {
      this.$emit("join-modal", this.itsUserName, this.itsSessionId);
    },
  },
  // props: {
  //   itsUserName: {
  //     type: String,
  //   },
  //   itsSessionId: {
  //     type: String,
  //   },
  // },
};
</script>
