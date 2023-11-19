// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

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
    head: {
      title: "蘭丸燒烤 | RANMARU",
      meta: [
        { name: "description", content: "蘭丸燒烤" },
        // 網站描述
        {
          hid: "description",
          name: "description",
          content: "蘭丸燒烤 | RANMARU",
        },
        // 關鍵字
        {
          hid: "keywords",
          name: "keywords",
          content: "作品集",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "logo.ico",
        },
      ],
    },
  },
});
