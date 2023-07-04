<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-10 flex h-fit w-fit flex-col">
      <h1 class="mb-[135px] text-center text-[33px] font-bold">
        {{ userName }}
      </h1>
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="relative z-0 h-[478.25px] w-[898.5px] rounded-[20px] bg-blue-50 p-[22px] shadow-lg xl:h-[700px] xl:w-[1198px]"
        >
          <img
            src="~img/user-neil-big.png"
            alt=""
            class="absolute left-1/2 top-0 z-50 h-[178.5px] w-[178.5px] -translate-x-1/2 -translate-y-1/2 xl:h-[238px] xl:w-[238px]"
          />
          <section class="mt-[56px]">
            <div class="mb-[26px] flex justify-around xl:mb-[36px]">
              <div
                class="flex h-[36px] w-[199px] items-center justify-center rounded-[21px] bg-white shadow-lg xl:h-[48px] xl:w-[266px]"
              >
                <p
                  class="text-[17.25px] leading-[120%] text-black xl:text-[23px]"
                >
                  email@example.com
                </p>
              </div>
              <div
                class="flex h-[36px] w-[199px] items-center justify-center rounded-[21px] bg-white shadow-lg xl:h-[48px] xl:w-[266px]"
              >
                <p
                  class="text-[17.25px] leading-[120%] text-black xl:text-[23px]"
                >
                  Dasar Pemrograman
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">
                  Student Emotion Overview
                </p>
                <RadarChart
                  v-if="isDisplayed"
                  class="self-center py-4 lg:h-[80%] lg:w-[80%] xl:h-[90%] xl:w-[90%]"
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
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">
                  Student Emotion Summary
                </p>
                <DoughnutChart
                  v-if="isDisplayed"
                  class="self-center pb-4 xl:pt-4 2xl:pt-4"
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
