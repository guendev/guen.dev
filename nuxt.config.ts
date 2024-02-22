// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-module-eslint-config',
  ],
  devtools: {
    enabled: true,
  },

})
