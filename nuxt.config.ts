// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  app: {
    baseURL: '/tsato21.github.io/',
    head: {
      title: 'Scripts Showcase',
      link: [
        { rel: 'icon', type: 'image/png', href: 'favicon.png' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  css: [
    '~/assets/css/style.css',
  ],
  
})
