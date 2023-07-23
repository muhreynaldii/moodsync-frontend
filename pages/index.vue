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
            class="before:ease relative text-center font-medium rounded-lg overflow-hidden border border-blue-600 bg-blue-600 text-white shadow-2xl transition-all duration-200 before:absolute before:right-0 before:top-0 before:h-14 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-500 hover:before:-translate-x-60 lg:h-[39px] lg:w-[180px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[228px] xl:px-[12px] xl:py-[14px] xl:text-base"
          >
          <span class="relative z-10">Masuk Sebagai Pengajar</span>
          </nuxt-link>
          <nuxt-link
            to="/vicon"
            class="relative text-center font-medium rounded-lg overflow-hidden border border-grey-200 text-black shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-blue-600 before:duration-300 before:ease-out hover:text-white hover:shadow-blue-600 hover:before:h-80 hover:before:w-80 lg:h-[39px] lg:w-[180px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[228px] xl:px-[12px] xl:py-[14px] xl:text-base"
          >
          <span class="relative z-10">Masuk Sebagai Pelajar</span>
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
