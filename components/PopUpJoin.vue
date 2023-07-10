<template>
  <div
    class="fixed inset-0 flex h-screen w-screen items-center justify-center bg-[#242424]/50"
  >
    <div
      class="relative flex h-auto w-[533.45px] flex-col items-center rounded-[13px] bg-white"
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
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px] focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          type="text"
          placeholder="Masukkan Nama Lengkap"
          required
        />
        <label
          class="mb-[13px] text-center text-[22.77px] font-medium text-[#111928]"
          >Nama Room</label
        >
        <!-- Tambahan Bu Asyifa -->
        <input
          v-model="itsRoomId"
          class="mb-4 h-[67.03px] w-[500.92px] focus:outline-none focus:border-blue-500 focus:ring-blue-500 rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px]"
          type="text"
          placeholder="Masukkan Nama Ruangan"
          required
        />
        <label
          class="mb-[13px] text-center text-[22.77px] font-medium text-[#111928]"
          >Kode Room</label
        >
        <input
          v-model="itsSessionId"
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px] focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          type="text"
          placeholder="Masukkan Kode Ruangan"
          required
        />
        <p class="text-center">
          <button
            class="mx-2 mt-2 h-[48px] w-[119px] rounded-[8px] border border-gray-200 bg-white text-black hover:border-red-400 hover:bg-red-500 hover:text-white"
            @click="goBack"
          >
            Kembali
          </button>
          <button
            class="mx-2 h-[48px] w-[119px] rounded-[8px] bg-blue-600 text-white hover:bg-blue-700"
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
  mounted() {
    this.generateRandomMeetingCode();
  },
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
    goBack() {
      this.$router.go(-1); // Kembali ke halaman sebelumnya
    },
    generateRandomMeetingCode() {
      var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      var meetingCode = "";

      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          meetingCode += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        if (i < 2) {
          meetingCode += "-";
        }
      }

      this.itsSessionId = meetingCode;
    },
  },
};
</script>
