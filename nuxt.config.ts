// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app:{
    head: {
      title: 'Amiri Kia',
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'سایت امیرحسین امیری کیا' },
      ],
      link: [
        
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
