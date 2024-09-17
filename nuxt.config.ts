// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro:{
        prerender: {
            crawlLinks: true,
            routes: [
                "/",
                "/blog",
            ],
        }
    },  

    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },

    alias: {
        css: "/<rootDir>/assets/css",
    },

    app: {
        baseURL: process.env.BASE_URL,
        head: {
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com"},
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@800&display=swap" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap"},
            ],
            meta: [
                { name: 'google-site-verification', content: 'U8JpwOvVf-aWQGqbT_RBxtfC1AkpTtaFZKr7JunqfC8' },
            ],
            htmlAttrs: {
                lang: 'pt-BR'
              },
        }
    },

    css: ["@/assets/css/main.css"],

    modules: ["@nuxtjs/i18n"],

    i18n: {
        vueI18n: "./i18n.config.ts",
        locales: ["en", "pt"],
        defaultLocale: "pt",
    },
    
    runtimeConfig: {
        public: {
            accessKey: process.env.AWS_GETPOSTS_USER_ACESS_KEY,
            secretKey: process.env.AWS_GETPOSTS_USER_SECRET_KEY,
        }
      }
})