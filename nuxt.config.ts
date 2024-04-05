// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  app: {
    baseURL: '/scripts-showcase/',
    head: {
      title: 'Scripts Showcase',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    // 'nuxt-icon',
  ],
  css: [
    '~/assets/css/style.css',
  ],
})
