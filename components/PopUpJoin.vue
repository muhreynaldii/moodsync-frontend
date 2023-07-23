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
          >Name</label
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
          v-if="this.$auth.user"
          >Room Name</label
        >
        <input
          v-model="itsRoomId"
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px] focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          type="text"
          placeholder="Masukkan Nama Ruangan"
          required
          v-if="this.$auth.user"
        />
        <label
          class="mb-[13px] text-center text-[22.77px] font-medium text-[#111928]"
          >Room Code</label
        >
        <input
          v-model="itsSessionId"
          class="mb-4 h-[67.03px] w-[500.92px] rounded-[13px] border-2 border-[#D1D5DB] px-[26px] py-[19px] text-[22.77px] focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          type="text"
          placeholder="Masukkan Kode Ruangan"
          required
        />
        <div class="flex items-center justify-center">
          <button
            class="transition-colors mx-2 h-[48px] w-[119px] rounded-[8px] border border-gray-200 bg-white text-black hover:border-red-400 hover:bg-red-500 hover:text-white"
            type="reset"
            @click="goBack"
          >
            Back
          </button>
          <button
            class="transition-colors mx-2 h-[48px] w-[119px] rounded-[8px] bg-blue-600 text-white hover:bg-blue-700"
            type="submit"
          >
            Join!
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$auth.user) {
      this.generateRandomMeetingCode();
    }
  },
  data() {
    return {
      itsUserName: this.$auth.user || "",
      itsSessionId: "",
      itsRoomId: "",
    };
  },
  methods: {
    pushData() {
      this.$emit(
        "join-modal",
        this.itsUserName,
        this.itsSessionId,
        this.itsRoomId
      );
    },
    goBack() {
      this.$router.go(-1);
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
