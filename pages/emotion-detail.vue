<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <section class="z-10 ml-10 flex h-fit w-fit flex-col">
      <h1 class="mb-[135px] text-center text-[33px] font-bold">Neil</h1>
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
                  Emosi Mahasiswa
                </p>
                <RadarChart style="width: 100%; height: 100%" class="py-2" />
              </div>
              <div
                class="h-[319.5px] w-[424.5px] rounded-[36px] bg-white px-6 py-2 shadow-lg xl:h-[426px] xl:w-[672px]"
              >
                <p class="text-[17.25px] font-bold xl:text-[23px]">Kehadiran</p>
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
