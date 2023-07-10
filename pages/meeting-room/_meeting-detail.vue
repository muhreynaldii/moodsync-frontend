<template>
  <main
    class="flex h-screen w-screen items-end justify-center overflow-hidden bg-white"
  >
    <section
      class="absolute top-[100px] z-10 ml-[32.25px] flex h-fit w-fit flex-col"
    >
      <h1
        class="text-start text-[24.75px] font-bold text-blue-600 xl:text-[33px] 2xl:text-[39.6px]"
      >
        <!-- Ganti sama Nama Meeting -->
        Meeting Rooms
      </h1>
      <h2
        class="mb-2 text-start text-[13px] text-gray-400 xl:text-[16px] 2xl:text-[18px]"
      >
        <!-- Ganti sama Kode Meeting -->
        List of All your meetings.
      </h2>
      <p
        class="inline-flex items-center justify-start gap-2 text-[16px] font-normal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-6 w-6"
        >
          <path
            d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
          />
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clip-rule="evenodd"
          />
        </svg>
        <!-- Ganti sama Tanggal Pembuatan Room -->
        {{ data.username }}
      </p>
    </section>
  </main>
</template>

<script>
export default {
  name: "DaftarMahasiswa",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Meeting-Detail | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Meeting-Detail | Moodsync",
      },
    ],
  },
  mounted() {
    this.getUsers();
  },
  data() {
    return {
      users: [],
    };
  },
//   ganti jadi rooms
  methods: {
    async getUsers() {
      try {
        const res = await this.$axios({
          method: "get",
          url: "api/users/student",
        });
        if (res.status === 200) {
          this.users = res.data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    goToDetail(username) {
      this.$router.push({
        path: `/daftar-mahasiswa/${username}`,
        params: { username },
      });
    },
  },
};
</script>

<style>
#container::-webkit-scrollbar {
  display: none;
}

#container {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
