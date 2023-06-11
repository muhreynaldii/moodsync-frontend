<template>
  <main class="h-screen overflow-hidden bg-white">
    <div class="flex">
      <section class="ml-24 flex h-screen w-1/2 flex-col justify-center">
        <heading-pages text="Our Features" />
        <div class="flex flex-col py-4">
          <ul v-for="(data, index) in list" :key="index" class="flex">
            <icons-checklist-blue />
            <li
              class="w-[741px] py-1 pl-1 text-[23px] leading-[120%] text-Gray-600"
            >
              {{ data.content }}
            </li>
          </ul>
        </div>
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
