<template>
  <main
    class="flex h-screen w-screen items-end justify-center overflow-hidden bg-white"
  >
    <section class="z-10 flex h-fit w-fit flex-col">
      <h1 class="mb-2 text-start text-[33px] font-bold">Notification</h1>
      <div class="flex justify-start gap-4">
        <div
          id="container"
          class="h-[800px] w-[1198px] overflow-scroll rounded-[20px] bg-blue-50 p-[22px] shadow-lg"
        >
          <div
            v-for="(data, index) in notif"
            :key="index"
            class="mb-[20px] flex h-[92px] w-full items-center justify-between rounded-[21px] bg-white px-[11px] py-[15px]"
          >
            <div class="flex items-center">
              <div class="flex flex-col pl-3">
                <p class="text-[21px] font-semibold">{{ data.name }}</p>
                <p class="text-[21px] text-Gray-500">{{ data.email }}</p>
              </div>
            </div>
            <time class="text-[21px] text-Gray-600">{{ data.time }}</time>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Notification",
  layout: "side",
  head: {
    title: "Notification | Moodsync",
    meta: [
      {
        property: "og:title",
        content: "Notification | Moodsync",
      },
    ],
  },
  data() {
    return {
      notif: [
        {
          name: "Dasar Pemrograman Pertemuan 2",
          email: "Jessica menunjukan emosi kebingungan",
          time: "Sekarang",
        },
        {
          name: "Dasar Pemrograman Pertemuan 3",
          email: "Dobleh menunjukan emosi marah",
          time: "30 menit yang lalu",
        },
      ],
    };
  },
};
</script>
