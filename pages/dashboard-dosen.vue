<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white xl:justify-center"
  >
    <div
      class="ml-14 flex h-fit w-fit flex-col justify-center xl:ml-[100px] 2xl:ml-0"
    >
      <section class="mb-[30px]">
        <h1
          class="mb-2 text-start text-[24.75px] font-bold xl:text-[33px] 2xl:text-[39.6px]"
        >
          Dashboard
        </h1>
        <div class="flex justify-center items-center gap-4">
          <div
            class="h-[147.75px] w-[290.25px] rounded-[36px] py-2 shadow-lg xl:h-[193px] xl:w-[387px] 2xl:h-[231.6px] 2xl:w-[464.4px] relative"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--dl-color-primary-300)" class="w-[80px] h-[80px] xl:w-[95px] xl:h-[95px] 2xl:w-[110px] 2xl:h-[110px] absolute top-[-55px] xl:top-[-65px] 2xl:top-[-72px] right-0">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
            <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
          </svg>
            <p
              class="text-center text-[17.25px] xl:text-[23px] 2xl:text-[27.6px]"
            >
              Pertemuan
            </p>
            <p
              class="2xl:[140.73px] text-center text-[87.96px] font-bold xl:text-[117px]"
            >
              4
            </p>
          </div>
          <div
            class="h-[147.75px] w-[290.25px] rounded-[36px] py-2 shadow-lg xl:h-[193px] xl:w-[387px] 2xl:h-[231.6px] 2xl:w-[464.4px] relative"
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="var(--dl-color-primary-300)" class="w-[80px] h-[80px] xl:w-[95px] xl:h-[95px] 2xl:w-[110px] 2xl:h-[110px] absolute top-[-55px] xl:top-[-65px] 2xl:top-[-72px] right-0">
            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
          </svg>

            <p
              class="text-center text-[17.25px] xl:text-[23px] 2xl:text-[27.6px]"
            >
              Jumlah Mahasiswa
            </p>
            <p
              class="2xl:[140.73px] text-center text-[87.96px] font-bold xl:text-[117px]"
            >
              31
            </p>
          </div>
        </div>
      </section>
      <section class="z-20">
        <h2
          class="mb-2 text-[17.25px] font-bold xl:text-[23px] 2xl:text-[27.6px]"
        >
          Statistic
        </h2>
        <div class="z-50 flex gap-[13.5px] xl:gap-4">
          <div
            class="flex h-[319.5px] w-[484px] flex-col overflow-hidden rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[672px] 2xl:h-[511.2px] 2xl:w-[806.4px]"
          >
            <p class="font-bold lg:text-[17.25px] xl:text-[23px]">
              Emotion summary
            </p>
            <DoughnutChart
              class="self-center pb-4 xl:pt-4 2xl:pt-8"
              :data="summary"
            />
          </div>
          <div
            class="flex h-[319.5px] w-[434.5px] flex-col overflow-hidden rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[622px] 2xl:h-[511.2px] 2xl:w-[727.2px]"
          >
            <p class="font-bold lg:text-[17.25px] xl:text-[23px]">
              Emotion overview
            </p>
            <RadarChart
              class="self-center py-4 lg:h-[80%] lg:w-[80%] xl:h-[90%] xl:w-[90%]"
              :data="overview"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// import { mapGetters, mapState } from "vuex";

export default {
  name: "DashboardDosen",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Dashboard-Dosen | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Dashboard-Dosen | Moodsync",
      },
    ],
  },
  data() {
    return {
      overview: {},
      summary: {},
    };
  },
  // computed: {
  //   ...mapGetters("recognition", ["overview", "summary"]),
  //   ...mapState("recognition", ["overview", "summary"]),
  // },
  mounted() {
    // this.getOverview();
    this.getOverview();
    this.getSummary();
  },
  methods: {
    async getOverview() {
      await this.$store.dispatch("recognition/fetchOverview");
    },
    async getOverview() {
      try {
        const res = await this.$axios({
          method: "get",
          url: "api/recognition/overview",
        });
        if (res.status === 200) {
          this.overview = res.data;
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
    async getSummary() {
      try {
        const res = await this.$axios({
          method: "get",
          url: "api/recognition/summary",
        });
        if (res.status === 200) {
          this.summary = res.data;
          console.log(this.summary);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    },
  },
};
</script>
