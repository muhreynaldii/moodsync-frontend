<template>
  <main
    class="flex h-screen w-screen items-end justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-[32.25px] flex h-fit w-fit flex-col">
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
            class="mb-[20px] flex h-[83.5px] w-full items-center justify-between rounded-[15px] bg-white px-[11px] py-[15px] xl:h-[92px] xl:rounded-[21px]"
          >
            <div class="flex items-center">
              <img
                :src="data.avatar"
                alt="user-profile"
                class="max-h-[36px] max-w-[36px] xl:h-fit xl:w-fit"
              />
              <div class="flex flex-col pl-3">
                <p class="text-[15.58px] font-semibold xl:text-[21px]">
                  {{ data.name }}
                </p>
                <p class="text-[15.58px] text-Gray-500 xl:text-[21px]">
                  {{ data.email }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import userNeil from "../assets/img/user-neil.png";
import userRamon from "../assets/img/user-ramon.png";

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
  data() {
    return {
      users: [
        {
          avatar: userNeil,
          name: "Neil",
          email: "email@example.com",
        },
        {
          avatar: userRamon,
          name: "Ramon",
          email: "email@example.com",
        },
      ],
    };
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
