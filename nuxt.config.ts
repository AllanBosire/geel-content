// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      gitInfo: {
        name: "geel-content",
        owner: "AllanBosire",
        url: "https://github.com/AllanBosire/geel-content",
      },
    },
  },
});
