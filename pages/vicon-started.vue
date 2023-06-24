<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <div class="flex h-fit w-fit flex-col items-center justify-center">
      <section
        class="z-20 mb-[30px] mt-10 flex h-fit w-[860.25px] flex-col items-center justify-center rounded-[20px] bg-Gray-50 xl:w-[1147px]"
      >
        <h1
          class="text-center text-[48.75px] font-bold text-blue-600 xl:text-[65px]"
        >
          Get Started
        </h1>
        <p class="mb-3 text-center text-[17.25px] text-Gray-400 xl:text-[23px]">
          Setup your Audio and Video before Joining
        </p>
        <img
          src="~img/dr-dre.png"
          alt="dr-dre"
          class="h-[400.5px] w-[715.5px] rounded-[33px] xl:h-fit xl:w-fit"
        />
        <div class="my-[29px] flex w-full items-center justify-between px-24">
          <AudioSettings />
          <ActionBar />
          <nuxt-link
            to="/vicon"
            class="text-medium z-10 h-[52px] w-[181px] rounded-lg bg-[#1A56DB] px-[24px] py-[14px] text-white"
          >
            Join Conference
          </nuxt-link>
        </div>
      </section>
    </div>
    <pop-up-join
      v-show="showModal"
      class="z-50"
      @close-modal="showModal = false"
    />
  </main>
</template>

<script>
export default {
  name: "ViconStarted",
  layout: "side",
  middleware: "auth",
  head: {
    title: "Vicon-Started | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Vicon-Started | Moodsync",
      },
    ],
  },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>
