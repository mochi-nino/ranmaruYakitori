// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "蘭丸燒烤 | RANMARU",
      meta: [{ name: "user", content: "會員中心" }],
      link: {
        rel: "icon",
        type: "image/x-icon",
        href: "logo.ico",
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/scss/main.scss"],

  modules: ["@nuxtjs/tailwindcss", "@vee-validate/nuxt", "@pinia/nuxt"],

  plugins: ["@/plugins/vee-validate.client"],

  veeValidate: {
    // 啟用 auto imports
    autoImports: true,
    // 更換 components 名稱
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },

  buildModules: ["@nuxtjs/fontawesome"],

  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/ranmaruYakitori/" : "/",
    buildAssetsDir: "/static/",
  },
});
