<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-10 flex h-fit w-fit flex-col">
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="relative z-0 mt-[150px] h-[478.25px] w-[898.5px] rounded-[20px] bg-blue-50 p-[22px] shadow-lg xl:h-[700px] xl:w-[1198px]"
        >
          <h1 class="absolute z-20 mb-[35px] text-start text-[81px] font-bold">
            {{ userName }}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--dl-color-primary-50)"
            class="absolute left-0 top-[-200px] z-0 h-[300px] w-[300px]"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clip-rule="evenodd"
            />
          </svg>

          <section class="mt-[56px]">
            <div class="mb-[26px] flex justify-around xl:mb-[36px]"></div>
            <div class="mt-[68px] flex gap-4 xl:mt-[100px]">
              <div
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[500px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">
                  Student Emotion Overview
                </p>
                <RadarChart
                  v-if="isDisplayed"
                  class="self-center py-6"
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
                <PieChart
                  v-if="isDisplayed"
                  class="self-center pb-10 xl:pt-4 2xl:pt-4"
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
  layout: "side-back",
  middleware: "auth",
  head: {
    title: "Emotion-Detail | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Emotion-Detail | Moodsync",
      },
    ],
  },
  async mounted() {
    await this.getRecognitionByMeetingIdAndUserId(
      this.$route.params.meetingId,
      this.$route.params.studentId
    );
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
    async getRecognitionByMeetingIdAndUserId(meetingId, userId) {
      try {
        const res = await this.$axios({
          method: "get",
          url: `api/recognition/${meetingId}/${userId}`,
        });
        if (res.status === 200) {
          this.userName = res.data.user.username;
          this.overview = res.data.meeting.recognitionsOverview;
          this.summary = res.data.meeting.recognitionsSummary;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  },
};
</script>
