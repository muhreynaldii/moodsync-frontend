import { resolve } from "path";

export default {
  ssr: false,
  alias: {
    img: resolve(__dirname, "./assets/img"),
    icons: resolve(__dirname, "./assets/icons"),
    style: resolve(__dirname, "./assets/style"),
    data: resolve(__dirname, "./assets/other/data"),
  },
  head: {
    title: "Moodsync",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      },
    ],
  },
  css: ["~/style.css"],
  buildModules: ["@nuxt/postcss8", "@braid/vue-formulate/nuxt"],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    extend(config, { isClient }) {
      // Menambahkan konfigurasi alias untuk fs module hanya di lingkungan client (browser)
      if (isClient) {
        config.resolve.alias["fs"] = require.resolve("./plugins/fs.js");
      }
    },
  },
  components: true,
  plugins: [
    { src: "./plugins/elippse-progress.js", mode: "client" },
    { src: "./plugins/fontawesome.js", mode: "client" },
  ],
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv", "@nuxtjs/auth-next"],
  axios: {
    baseURL: process.env.API_BASE_URL,
  },
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        user: {
          property: "username",
        },
        endpoints: {
          login: { url: "api/auth/login", method: "post" },
          refresh: { url: "/api/auth/refreshToken", method: "post" },
          user: {
            url: "api/users/me",
            method: "get",
          },
          // user: false,
          logout: false,
        },
        token: {
          property: "accessToken",
          required: true,
          type: "Bearer",
        },
        refreshToken: {
          property: "refreshToken",
          data: "refreshToken",
          maxAge: 60 * 60 * 24 * 30,
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/dashboard-dosen",
    },
  },
};
