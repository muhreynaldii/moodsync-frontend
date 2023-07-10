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
        Meeting Rooms
      </h1>
      <h2
        class="mb-2 text-start text-[13px] text-gray-400 xl:text-[16px] 2xl:text-[18px]"
      >
        List of All your meetings.
      </h2>
      <div
        id="container"
        class="relative mb-7 flex h-[633px] w-[800px] flex-row flex-wrap gap-2 overflow-scroll xl:h-[844px] xl:w-[1198px] 2xl:h-[905px] 2xl:w-[1598px]"
      >
        <!-- Ganti Sama Nama Room -->
        <div
          v-for="(data, index) in meeting"
          :key="index"
          class="relative h-auto w-[388px] rounded-lg border border-blue-50 bg-white px-6 py-4 shadow-lg"
          @click="goToDetail(data.username)"
        >
          <!--  -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--dl-color-primary-50)"
            class="absolute bottom-0 right-0 z-0 h-[100%] w-auto"
          >
            <path
              fill-rule="evenodd"
              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
              clip-rule="evenodd"
            />
          </svg>

          <div class="flex flex-col items-start justify-center">
            <button class="flex flex-col pl-3">
              <!-- Ganti Sama Nama Room -->
              <div class="flex flex-col items-start justify-center">
                <p class="text-[16px] font-normal">
                  {{ data.description }}
                </p>
                <!-- Ganti Sama Kode Room -->
                <p class="text-[16px] font-normal text-gray-400">
                  {{ data.code }}
                </p>
              </div>
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
                {{ data.createdAt }}
              </p>
              <p
                class="text-[16px] font-normal text-blue-600 hover:text-blue-800"
              >
                Details >
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "DaftarMahasiswa",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Daftar-Mahasiswa | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Daftar-Mahasiswa | Moodsync",
      },
    ],
  },
  mounted() {
    this.getMeeting();
  },
  data() {
    return {
      meeting: [],
    };
  },
  methods: {
    async getMeeting() {
      try {
        const res = await this.$axios({
          method: "get",
          url: "api/meeting",
        });
        if (res.status === 200) {
          this.meeting = res.data;
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
