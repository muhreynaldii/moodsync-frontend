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
        <div class="flex justify-center gap-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="h-[147.75px] w-[290.25px] rounded-[36px] py-2 shadow-lg xl:h-[193px] xl:w-[387px] 2xl:h-[231.6px] 2xl:w-[464.4px]"
          >
            <p
              class="text-center text-[17.25px] xl:text-[23px] 2xl:text-[27.6px]"
            >
              {{ item.title }}
            </p>
            <p
              class="2xl:[140.73px] text-center text-[87.96px] font-bold xl:text-[117px]"
            >
              {{ item.value }}
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
      items: [
        { title: "Pertemuan", value: "4" },
        { title: "Jumlah Mahasiswa", value: "31" },
      ],
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
