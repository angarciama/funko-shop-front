// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ["~/assets/css/index.css"],
  runtimeConfig: {
    public: {
      apiBackUrl: process.env.API_BACK_URL ?? 'https://localhost:5000'
    }
  }
})
