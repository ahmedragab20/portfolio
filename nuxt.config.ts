// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Red Hat Mono": [300, 400, 500, 600, 700],
    },
  },
});
