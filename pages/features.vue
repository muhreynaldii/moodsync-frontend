<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section
        class="ml-[78.75px] flex h-screen w-[40%] flex-col justify-center xl:ml-[105px] xl:w-1/2 2xl:ml-[145px]"
      >
        <heading-pages text="Features" />
        <div class="flex flex-col py-4">
          <ul
            v-for="(data, index) in list"
            :key="index"
            class="mb-1 flex items-center"
          >
            <icons-checklist-blue
              class="max-h-[18px] max-w-[18px] xl:max-h-[24px] xl:max-w-[24px]"
            />
            <li
              class="w-[555.75px] py-1 pl-1 text-[17.25px] leading-[120%] text-Gray-600 xl:w-[741px] xl:text-[23px]"
            >
              {{ data.content }}
            </li>
          </ul>
        </div>
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
    title: "Features | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Features | Moodsync",
      },
    ],
  },
  data() {
    return {
      list: [
        { content: "Emotion Detection" },
        { content: "Emotion Icons" },
        { content: "Emotion Analytics" },
        { content: "Real-time Feedback" },
        { content: "Video Conference" },
        { content: "Student List" },
      ],
    };
  },
};
</script>
