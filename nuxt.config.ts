// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  app: {
    baseURL: '/scripts-showcase/',
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
