<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex flex-col lg:flex-row">
      <section
        class="ml-[78.75px] mt-[158.25px] flex h-full w-[40%] flex-col justify-center lg:w-1/2 xl:ml-[105px] xl:mt-[211px] xl:w-1/2 2xl:ml-[145px]"
      >
        <heading-pages
          text="About Us"
          :dot="false"
          class="mb-[19.5px] xl:mb-[26px]"
        />
        <p
          v-for="(data, index) in description"
          :key="index"
          class="mb-[12px] text-justify leading-[20px] text-Gray-600 lg:w-[486.75px] lg:text-[17.25px] xl:mb-[18px] xl:w-[649px] xl:text-[23px] xl:leading-[27.6px]"
        >
          {{ data.content }}
        </p>
        <nuxt-link
          to="/"
          class="before:ease relative text-center font-medium rounded-lg overflow-hidden border border-blue-600 bg-blue-600 text-white shadow-2xl transition-all duration-200 before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-60 lg:h-[39px] lg:w-[180px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[228px] xl:px-[12px] xl:py-[14px] xl:text-base"
        >
        <span class="relative z-10">Get Started!</span>
        </nuxt-link>
      </section>
      <aside
        class="mr-[29px] flex h-screen w-[60%] justify-end xl:mr-[38px] xl:w-1/2 2xl:justify-center"
      >
        <img
          src="~img/sad-fun-confused-light.png"
          alt="sad-fun-confused"
          class="object-cover object-center"
        />
      </aside>
    </div>
  </main>
</template>

<script>
export default {
  layout: "waves",
  head: {
    title: "About | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "About | Moodsync",
      },
    ],
  },
  data() {
    return {
      description: [
        {
          content:
            "Aplikasi Video Conference dengan Emotion Recognition adalah sebuah platform komunikasi jarak jauh yang dirancang khusus untuk meningkatkan pengalaman pengguna dalam konferensi video. Salah satu fitur utama dari aplikasi ini adalah kemampuannya untuk mendeteksi emosi pengguna selama panggilan video.",
        },
        {
          content:
            "Dengan menggunakan teknologi pengenalan emosi yang canggih, aplikasi ini dapat menganalisis ekspresi wajah pengguna dalam waktu nyata. Algoritma yang terintegrasi dengan aplikasi akan mengidentifikasi berbagai emosi seperti kegembiraan, kesedihan, kejutan, marah, atau ketidakpuasan. Hal ini memungkinkan para peserta video conference untuk mendapatkan pemahaman yang lebih mendalam tentang respons emosional satu sama lain, bahkan dalam komunikasi nonverbal.",
        },
      ],
    };
  },
};
</script>
