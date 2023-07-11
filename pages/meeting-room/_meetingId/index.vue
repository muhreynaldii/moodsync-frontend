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
        {{ detailMeeting.description }}
      </h1>
      <h2
        class="mb-2 text-start text-[13px] text-gray-400 xl:text-[16px] 2xl:text-[18px]"
      >
        {{ detailMeeting.code }}
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
        {{
          $moment(detailMeeting.createdAt).format("DD MMMM YYYY,  h:mm:ss a")
        }}
      </p>
      <ul class="inline-flex items-center justify-start">
        <li class="mr-2">
          <!-- Halaman Ini -->
          <a
            @click="changeTab('recognition')"
            :class="{
              active: activeTab === 'recognition',
              'border-blue-600 text-blue-600': activeTab === 'recognition',
              'border-transparent': activeTab !== 'recognition',
            }"
            class="inline-block cursor-pointer rounded-t-lg border-b-2 p-4 hover:border-blue-700 hover:text-blue-700"
            >Recognition</a
          >
        </li>
        <li class="mr-2">
          <!-- Halaman Participants -->
          <a
            @click="changeTab('participants')"
            :class="{
              active: activeTab === 'participants',
              'border-blue-600 text-blue-600': activeTab === 'participants',
              'border-transparent': activeTab !== 'participants',
            }"
            class="inline-block cursor-pointer rounded-t-lg border-b-2 p-4 hover:border-blue-700 hover:text-blue-700"
            >Participants</a
          >
        </li>
      </ul>
      <div
        id="container"
        class="mb-7 flex h-[500px] w-[800px] justify-start gap-2 overflow-scroll xl:h-[600px] xl:w-[1198px] 2xl:h-[700px] 2xl:w-[1598px]"
      >
        <div
          v-if="activeTab === 'recognition'"
          class="z-50 flex items-center gap-[13.5px] xl:gap-4"
        >
          <div
            class="flex h-[319.5px] w-[380px] flex-col overflow-hidden rounded-[36px] border border-blue-50 bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[566px] 2xl:h-[511.2px] 2xl:w-[806.4px]"
          >
            <p class="font-bold lg:text-[17.25px] xl:text-[23px]">
              Emotion summary
            </p>
            <PieChart
              v-if="isDisplayed"
              class="self-center pb-5 xl:pt-4 2xl:pt-8"
              :data="summary"
            />
            <p
              v-if="!isDisplayed"
              class="flex h-full items-center justify-center pb-4"
            >
              Data Tidak Ditemukan
            </p>
          </div>
          <div
            class="flex h-[319.5px] w-[380px] flex-col overflow-hidden rounded-[36px] border border-blue-50 bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[566px] 2xl:h-[511.2px] 2xl:w-[727.2px]"
          >
            <p class="font-bold lg:text-[17.25px] xl:text-[23px]">
              Emotion overview
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
        </div>

        <div
          v-else-if="activeTab === 'participants'"
          id="container"
          class="relative mb-7 flex h-[633px] w-[800px] flex-row flex-wrap gap-2 overflow-scroll xl:h-[844px] xl:w-[1198px] 2xl:h-[905px] 2xl:w-[1598px]"
        >
          <div
            v-if="!users.length"
            class="absolute bottom-0 left-0 right-0 top-0 mx-auto my-auto h-[300px] text-center text-lg"
          >
            Data tidak ditemukan
          </div>
          <div
            v-for="(data, index) in users"
            :key="index"
            class="relative h-[94px] w-[388px] rounded-lg border border-blue-50 bg-white px-6 py-4 shadow-lg"
            @click="goToDetail(data._id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="var(--dl-color-primary-50)"
              class="absolute bottom-0 right-0 z-0 h-[100%] w-auto"
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
                <p
                  class="text-[16px] font-normal text-blue-600 hover:text-blue-800"
                >
                  Emotion Details >
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
  async mounted() {
    await this.getMeetingByCode(this.$route.params.meetingId);
    await this.getRecognitionById(this.detailMeeting.meetingId);
    await this.getUsersByMeetingId(this.detailMeeting.meetingId);
  },
  data() {
    return {
      meeting: [],
      detailMeeting: {
        description: "",
        code: "",
        createdAt: "",
        meetingId: "",
      },
      activeTab: "recognition",
      users: [],
      overview: {},
      summary: {},
      isDisplayed: true,
    };
  },
  methods: {
    async getMeetingByCode(id) {
      try {
        const res = await this.$axios({
          method: "get",
          url: `api/meeting/${id}`,
        });
        if (res.status === 200) {
          this.detailMeeting.description = res.data.description;
          this.detailMeeting.code = res.data.code;
          this.detailMeeting.createdAt = res.data.createdAt;
          this.detailMeeting.meetingId = res.data._id;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getRecognitionById(meetingId) {
      try {
        const res = await this.$axios({
          method: "get",
          url: `api/recognition/${meetingId}`,
        });
        if (res.status === 200) {
          this.overview = res.data.meeting.recognitionsOverview;
          this.summary = res.data.meeting.recognitionsSummary;
        }
      } catch (error) {
        this.isDisplayed = false;
        console.log(error);
      }
    },

    async getUsersByMeetingId(meetingId) {
      try {
        const res = await this.$axios({
          method: "get",
          url: `api/users?meetingId=${meetingId}`,
        });
        if (res.status === 200) {
          this.users = res.data;
          console.log(this.users);
        }
      } catch (error) {
        console.log(error);
      }
    },
    goToDetail(userId) {
      this.$router.push({
        path: `/meeting-room/${this.$route.params.meetingId}/${userId}`,
        params: { userId },
      });
    },
    changeTab(tab) {
      this.activeTab = tab;
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
