<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex flex-col lg:flex-row">
      <section
        class="ml-24 mt-[200px] flex h-full w-2/3 flex-col justify-center lg:w-1/2"
      >
        <heading-pages text="About Us" :dot="false" />
        <p
          v-for="(data, index) in description"
          :key="index"
          class="py-[26px] text-justify leading-[120%] text-Gray-600 lg:w-[486.75px] lg:text-[17.25px] xl:w-[649px] xl:text-[23px] 2xl:w-[741px]"
        >
          {{ data.content }}
        </p>
        <nuxt-link
          to="/login"
          class="flex h-[39px] items-center justify-center rounded-lg bg-[#1A56DB] text-center text-[12px] text-white lg:h-[39px] lg:w-[152.25px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[203px] xl:px-[12px] xl:py-[14px] xl:text-base"
        >
          Get Started!
        </nuxt-link>
      </section>
      <aside
        class="mr-[28.5px] hidden h-screen w-1/2 justify-end lg:flex xl:mr-[38px] 2xl:justify-center"
      >
        <img
          src="~img/sad-fun-confused-light.png"
          alt="sad-fun-confused"
          class="object-cover object-left lg:w-[400px] xl:w-[608px] 2xl:w-[613px]"
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
