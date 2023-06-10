<template>
  <div class="flex min-h-screen w-full flex-col items-center overflow-auto">
    <bg-bawah rootClassName="bg-bawah-root-class-name9"></bg-bawah>
    <bg-atas rootClassName="bg-atas-root-class-name2"></bg-atas>
    <div
      class="absolute left-0 right-0 top-0 m-auto flex h-[1002px] w-[1600px] flex-col items-center self-center"
    >
      <img
        alt="pastedImage"
        src="/assets/pastedimage-x2a8.svg"
        class="absolute right-0 top-0 h-[1002px] w-[608px]"
      />
      <div
        class="absolute left-0 top-[150px] flex h-[387px] w-[787px] flex-col items-start justify-start"
      >
        <img
          alt="pastedImage"
          src="/assets/pastedimage-sw6m.svg"
          class="absolute left-0 top-0 h-[110px] w-[158px]"
        />
        <div
          class="absolute left-[46px] top-[40px] flex h-auto w-[741px] flex-col items-start gap-[26px]"
        >
          <h1 class="h-auto w-[741px] text-[65px] leading-[120%] text-black">
            About Us
          </h1>
          <span
            class="h-auto w-[741px] text-justify text-[23px] leading-[120%] text-gray-600"
          >
            <p class="mb-[46px] text-[23px]">
              Aplikasi Video Conference dengan Emotion Recognition adalah sebuah
              platform komunikasi jarak jauh yang dirancang khusus untuk
              meningkatkan pengalaman pengguna dalam konferensi video. Salah
              satu fitur utama dari aplikasi ini adalah kemampuannya untuk
              mendeteksi emosi pengguna selama panggilan video.
            </p>
            <span class="text-[23px]">
              Dengan menggunakan teknologi pengenalan emosi yang canggih,
              aplikasi ini dapat menganalisis ekspresi wajah pengguna dalam
              waktu nyata. Algoritma yang terintegrasi dengan aplikasi akan
              mengidentifikasi berbagai emosi seperti kegembiraan, kesedihan,
              kejutan, marah, atau ketidakpuasan. Hal ini memungkinkan para
              peserta video conference untuk mendapatkan pemahaman yang lebih
              mendalam tentang respons emosional satu sama lain, bahkan dalam
              komunikasi nonverbal
            </span>
            <span class="text-[23px]">.</span>
          </span>
          <div class="flex items-start gap-10">
            <nuxt-link
              to="/login"
              id="GetStarted"
              class="flex w-[203px] shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1A56DB] px-[24px] py-[14px]"
            >
              <span class="h-auto font-medium leading-[150%] text-white"
                >Lets Try!</span
              >
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <app-nav rootClassName="nav-root-class-name2"></app-nav>
  </div>
</template>

<script>
export default {
  name: "About",
  head: {
    title: "About | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "About | Moodsync",
      },
    ],
  },
};
</script>

<style scoped></style>
