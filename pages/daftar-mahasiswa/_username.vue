<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-10 flex h-fit w-fit flex-col">
      <div class="flex justify-start gap-4">
        <div
        id="container"
        class="relative mt-[150px] z-0 h-[478.25px] w-[898.5px] rounded-[20px] bg-blue-50 p-[22px] shadow-lg xl:h-[700px] xl:w-[1198px]"
        >

        <h1 class="absolute z-20 mb-[35px] text-start text-[81px] font-bold">
          {{ userName }}
        </h1>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--dl-color-primary-50)" class="absolute w-[300px] h-[300px] left-0 top-[-200px] z-0">
          <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
        </svg>

        <section class="mt-[56px]">
            <div class="mb-[26px] flex justify-around xl:mb-[36px]">
            </div>
            <div class="flex gap-4 mt-[68px] xl:mt-[100px]">
              <div
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[500px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">
                  Student Emotion Overview
                </p>
                <p class="mb-0 text-start text-[10px] text-gray-400 xl:text-[14px] 2xl:text-[16px]">
                  Student emotion of the whole meeting.
                </p>
                <RadarChart
                  v-if="isDisplayed"
                  class="items-center justify-center mt-[-20px] xl:mt-[-27px]"
                  :data="overview"
                />
                <p
                  v-if="!isDisplayed"
                  class="flex h-full items-center justify-center pb-4"
                >
                  Data Tidak Ditemukan
                </p>
              </div>
              <div
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[500px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">
                  Student Emotion Summary
                </p>
                <p class="mb-[-8px] text-start text-[10px] text-gray-400 xl:text-[14px] 2xl:text-[16px]">
                  Emotions divided between positive and negative.
                </p>
                <PieChart
                  v-if="isDisplayed"
                  class="self-center pb-10"
                  :data="summary"
                />
                <p
                  v-if="!isDisplayed"
                  class="flex h-full items-center justify-center pb-4"
                >
                  Data Tidak Ditemukan
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "EmotionDetail",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Emotion-Detail - exported project",
    meta: [
      {
        property: "og:title",
        content: "Emotion-Detail - exported project",
      },
    ],
  },
  async mounted() {
    await this.getUsersByUsername(this.$route.params.username);
  },
  data() {
    return {
      userName: "",
      id: "",
      overview: {},
      summary: {},
      isDisplayed: true,
    };
  },
  methods: {
    async getUsersByUsername(username) {
      try {
        const res = await this.$axios({
          method: "get",
          url: `api/users/username/${username}`,
        });
        if (res.status === 200) {
          this.userName = res.data.username;
          // this.id = res.data._id;
          this.getUsersOverview(res.data._id);
          this.getUsersSummary(res.data._id);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async getUsersOverview(id) {
      this.$axios
        .get(`api/users/${id}/overview`)
        .then((res) => {
          if (res.status === 200) {
            this.overview = res.data;
          }
        })
        .catch((error) => {
          this.isDisplayed = false;
          console.log(error);
        });
    },
    async getUsersSummary(id) {
      this.$axios
        .get(`api/users/${id}/summary`)
        .then((res) => {
          if (res.status === 200) {
            this.summary = res.data;
          }
        })
        .catch((error) => {
          this.isDisplayed = false;
          console.log(error);
        });
    },
  },
};
</script>
