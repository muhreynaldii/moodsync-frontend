export default {
  ssr: false,
  css: ["~/style.css"],
  buildModules: ["@nuxt/postcss8", "@braid/vue-formulate/nuxt"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
