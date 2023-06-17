<template>
  <main
    class="flex h-screen w-screen items-end justify-center overflow-hidden bg-white"
  >
    <section class="z-10 flex h-fit w-fit flex-col">
      <h1 class="mb-2 text-start text-[33px] font-bold">Daftar Mahasiswa</h1>
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="h-[800px] w-[1198px] overflow-scroll rounded-[20px] bg-blue-50 p-[22px] shadow-lg"
        >
          <div
            v-for="(data, index) in users"
            :key="index"
            class="mb-[20px] flex h-[92px] w-full items-center justify-between rounded-[21px] bg-white px-[11px] py-[15px]"
          >
            <div class="flex items-center">
              <img :src="data.avatar" alt="user-profile" class="h-fit w-fit" />
              <div class="flex flex-col pl-3">
                <p class="text-[21px] font-semibold">{{ data.name }}</p>
                <p class="text-[21px] text-Gray-500">{{ data.email }}</p>
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
