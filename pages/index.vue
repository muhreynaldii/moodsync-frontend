<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section class="ml-24 flex h-screen w-1/2 flex-col justify-center">
        <heading-pages text="Connect With Emotion:" />
        <h2 class="w-[741px] text-[46px] leading-[120%] text-black">
          Experience Video Conferencing like never before!
        </h2>
        <p class="w-[741px] py-[26px] text-[23px] leading-[120%] text-Gray-600">
          {{ description }}
        </p>
        <div class="flex justify-start gap-10">
          <nuxt-link
            to="/login"
            class="h-[52px] w-[203px] rounded-lg bg-[#1A56DB] px-[12px] py-[14px] text-center text-white"
          >
            Masuk Sebagai Dosen
          </nuxt-link>
          <nuxt-link
            to="/login"
            class="h-[52px] w-[203px] rounded-lg border border-Gray-200 bg-white px-[12px] py-[14px] text-center font-medium text-black"
          >
            Masuk Sebagai Siswa
          </nuxt-link>
        </div>
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
  head: {
    title: "Home | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Home | Moodsync",
      },
    ],
  },
  data() {
    return {
      description:
        "Revolutionize your video conferencing experience with real-time emotion recognition technology.",
    };
  },
};
</script>
