<template>
  <main
    class="flex h-screen w-screen items-center justify-center overflow-hidden bg-white"
  >
    <div class="flex h-fit w-fit flex-col items-center justify-center">
      <section
        class="mb-[30px] flex h-fit w-[1147px] flex-col items-center justify-center rounded-[20px] bg-Gray-50"
      >
        <h1 class="text-center text-[65px] font-bold text-blue-600">
          Get Started
        </h1>
        <p class="mb-3 text-center text-[23px] text-Gray-400">
          Setup your Audio and Video before Joining
        </p>
        <img src="~img/dr-dre.png" alt="dr-dre" class="rounded-[33px]" />
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
};
</script>
