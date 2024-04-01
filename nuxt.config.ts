// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  app: {
    baseURL: '/scripts-showcase/',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  css: [
    '~/assets/css/style.css',
  ],
  
})
