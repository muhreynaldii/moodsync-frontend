<template>
  <main
    class="flex h-screen w-screen items-end justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-[32.25px] mt-6 flex h-fit w-fit flex-col absolute top-[100px]">
      <h1 class="mb-2 text-start text-[24.75px] font-bold xl:text-[33px]">
        Daftar Mahasiswa
      </h1>
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="h-[633px] w-[898px] overflow-scroll rounded-[20px] bg-blue-50 p-[16.5px] shadow-lg xl:h-[844px] xl:w-[1198px] xl:p-[22px] 2xl:h-[905px] 2xl:w-[1598px]"
        >
          <div
            v-for="(data, index) in users"
            :key="index"
            class="mb-[20px] flex h-[83.5px] w-full cursor-pointer items-center justify-between rounded-[15px] bg-white px-[11px] py-[15px] xl:h-[92px] xl:rounded-[21px]"
            @click="goToDetail(data.username)"
          >
            <div class="flex items-center">
              <button class="flex flex-col pl-3">
                <p class="text-[15.58px] font-semibold xl:text-[21px]">
                  {{ data.username }}
                </p>
              </button>
            </div>
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
    this.getUsers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsers() {
      try {
        const res = await this.$axios({
          method: "get",
          url: "api/users",
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
