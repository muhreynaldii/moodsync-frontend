<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <section class="z-10 flex h-fit w-fit flex-col">
      <h1 class="mb-[135px] text-center text-[33px] font-bold">Neil</h1>
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="relative z-0 h-[700px] w-[1198px] rounded-[20px] bg-blue-50 p-[22px] shadow-lg"
        >
          <img
            src="~img/user-neil-big.png"
            alt=""
            class="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
          />
          <section class="mt-[56px]">
            <div class="mb-[60px] flex justify-around">
              <div
                class="flex h-[48px] w-[266px] items-center justify-center rounded-[21px] bg-white shadow-lg"
              >
                <p class="text-[23px] leading-[120%] text-black">
                  email@example.com
                </p>
              </div>
              <div
                class="flex h-[48px] w-[266px] items-center justify-center rounded-[21px] bg-white shadow-lg"
              >
                <p class="text-[23px] leading-[120%] text-black">
                  Dasar Pemrograman
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                class="h-[426px] w-[672px] rounded-[36px] bg-white px-6 py-2 shadow-lg"
              >
                <p class="text-[23px] font-bold">Emosi Mahasiswa</p>
                <RadarChart style="width: 100%; height: 100%" class="py-2" />
              </div>
              <div
                class="h-[426px] w-[672px] rounded-[36px] bg-white px-6 pt-2 shadow-lg"
              >
                <p class="text-[23px] font-bold">Kehadiran</p>
                <PieChart style="width: 100%; height: 100%" class="py-2" />
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
};
</script>
