<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section
        class="ml-[78.75px] flex h-screen w-[40%] flex-col justify-center xl:ml-[105px] xl:w-1/2 2xl:ml-[145px]"
      >
        <heading-pages
          text="Connect With Emotion:"
          class="lg:w-[555.75px] xl:w-[741px]"
        />
        <h2
          class="flex-wrap leading-[120%] text-black lg:w-[555.75px] lg:text-[34.5px] xl:w-[741px] xl:text-[46px]"
        >
          Experience Video Conferencing like never before!
        </h2>
        <p
          class="py-[26px] leading-[120%] text-Gray-600 lg:w-[500.75px] lg:text-[17.25px] xl:w-[741px] xl:text-[23px]"
        >
          {{ description }}
        </p>
        <div class="flex justify-start gap-10">
          <nuxt-link
            to="/login"
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg bg-blue-600 text-center text-white hover:bg-blue-700 lg:h-[39px] lg:w-[167.25px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[223px] xl:px-[12px] xl:py-[14px] xl:text-base"
          >
            Masuk Sebagai Pengajar
          </nuxt-link>
          <nuxt-link
            to="/vicon"
            class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg border border-Gray-200 bg-white text-center font-medium text-black hover:bg-slate-50 lg:h-[39px] lg:w-[167.25px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[223px] xl:px-[12px] xl:py-[14px] xl:text-base"
          >
            Masuk Sebagai Pelajar
          </nuxt-link>
        </div>
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
