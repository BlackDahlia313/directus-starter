import { naiveui, tailwindcss } from "./config";

export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: "Nuxt starter",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  css: ["~/assets/styles/main.css"],

  modules: ["@bg-dev/nuxt-naiveui", "@nuxtjs/tailwindcss", "nuxt-security"],

  naiveui,
  tailwindcss,

  security: {
    corsHandler: {
      origin: process.env.AUTH_BASE_URL,
      methods: "*",
    },
    headers: {
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "https://*.googleusercontent.com",
          "https://ui-avatars.com",
          "https://www.googletagmanager.com",
        ],
      },
    },
  },

  runtimeConfig: {
    public: {
      bugsnag: {
        enabled: !process.dev,
        apiKey: process.env.BUGSNAG_API_KEY,
      },
    },
  },
});
