<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section class="ml-24 mt-10 flex h-screen w-1/2 flex-col justify-center">
        <heading-pages text="About" :dot="false" />
        <p
          v-for="(data, index) in description"
          :key="index"
          class="w-[741px] py-[26px] text-justify text-[23px] leading-[120%] text-Gray-600"
        >
          {{ data.content }}
        </p>
        <nuxt-link
          to="/login"
          class="w-[203px] rounded-lg bg-[#1A56DB] px-[24px] py-[14px] text-center text-white"
        >
          Lets Try!!
        </nuxt-link>
      </section>
      <aside
        class="mr-[38px] flex h-screen w-1/2 justify-end 2xl:justify-center"
      >
        <img src="~img/sad-fun-confused-light.png" alt="sad-fun-confused" />
      </aside>
    </div>
  </main>
</template>

<script>
export default {
  layout: "waves",
  data() {
    return {
      description: [
        {
          content:
            "Aplikasi Video Conference dengan Emotion Recognition adalah sebuah platform komunikasi jarak jauh yang dirancang khusus untuk meningkatkan pengalaman pengguna dalam konferensi video. Salah satu fitur utama dari aplikasi ini adalah kemampuannya untuk mendeteksi emosi pengguna selama panggilan video.",
        },
        {
          content:
            "Dengan menggunakan teknologi pengenalan emosi yang canggih, aplikasi ini dapat menganalisis ekspresi wajah pengguna dalam waktu nyata. Algoritma yang terintegrasi dengan aplikasi akan mengidentifikasi berbagai emosi seperti kegembiraan, kesedihan, kejutan, marah, atau ketidakpuasan. Hal ini memungkinkan para peserta video conference untuk mendapatkan pemahaman yang lebih mendalam tentang respons emosional satu sama lain, bahkan dalam komunikasi nonverbal .",
        },
      ],
    };
  },
};
</script>
