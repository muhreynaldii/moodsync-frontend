<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section class="ml-[78.75px] xl:ml-[105px] 2xl:ml-[145px] flex h-screen xl:w-1/2 flex-col justify-center w-[40%]">
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
          to="/login"
          class="w-[152.25px] rounded-lg bg-[#1A56DB] px-[24px] py-[14px] text-center text-[12px] text-white lg:h-[39px] lg:w-[152.25px] lg:px-[9.13px] lg:py-[10.5px] lg:text-[12px] xl:h-[52px] xl:w-[203px] xl:px-[12px] xl:py-[14px] xl:text-base"
        >
          Get Started!
        </nuxt-link>
      </section>
      <aside
        class="xl:mr-[38px] flex h-screen xl:w-1/2 justify-end 2xl:justify-center mr-[29px] w-[60%]"
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
        { content: "Emotion Icons and Avatars" },
        { content: "Emotion Analytics" },
        { content: "Real-time Feedback" },
      ],
    };
  },
};
</script>
