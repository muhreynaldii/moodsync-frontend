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
        Student List
      </h1>
      <h2
        class="mb-2 text-start text-[13px] text-gray-400 xl:text-[16px] 2xl:text-[18px]"
      >
        List of All your students.
      </h2>
      <div
        id="container"
        class="relative flex max-h-[545px] w-[800px] flex-row flex-wrap gap-2 overflow-scroll mb-7 xl:max-h-[771px] xl:w-[1198px] 2xl:max-h-[820px] 2xl:w-[1598px]"
      >
        <div
          v-for="(data, index) in users"
          :key="index"
          class="group transition-colors relative h-[94px] w-[388px] rounded-lg border border-blue-50 bg-white hover:bg-blue-50 px-6 py-4 shadow-lg"
          @click="goToDetail(data.username)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--dl-color-primary-50)"
            class="group-hover:fill-white transition-colors absolute bottom-0 right-0 z-0 h-[100%] w-auto"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex flex-col items-start justify-center">
            <button class="flex flex-col pl-3">
              <p class="text-[16px] font-normal xl:text-[21px]">
                {{ data.username }}
              </p>
              <p class="text-[16px] font-normal text-blue-600 hover:text-blue-800">
                Emotion Details >
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
  name: "DaftarPelajar",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Daftar-Pelajar | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Daftar-Pelajar | Moodsync",
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
        path: `/daftar-pelajar/${username}`,
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
