<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <div class="flex h-fit w-fit flex-col justify-center">
      <section class="mb-[30px]">
        <h1 class="mb-2 text-start text-[33px] font-bold">Dashboard</h1>
        <div class="flex justify-center gap-4">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="h-[193px] w-[387px] rounded-[36px] py-2 shadow-lg"
          >
            <p class="text-center text-[23px]">{{ item.title }}</p>
            <p class="text-center text-[117px] font-bold">{{ item.value }}</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-2 text-[23px] font-bold">Statistic</h2>
        <div class="flex gap-4">
          <div class="h-[426px] w-[672px] rounded-[36px] px-6 py-2 shadow-lg">
            <p class="text-[23px] font-bold">Presensi Mahasiswa</p>
            <BarChart style="width: 100%; height: 100%" class="py-2" />
          </div>
          <div class="h-[426px] w-[672px] rounded-[36px] px-6 pt-2 shadow-lg">
            <p class="text-[23px] font-bold">Emosi Mahasiswa</p>
            <RadarChart style="width: 100%; height: 100%" class="py-2" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "DashboardDosen",
  layout: "side",
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
    };
  },
};
</script>
