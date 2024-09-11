// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro:{
        prerender: {
            crawlLinks: true,
            routes: [
                "/",
                "/blog",  
                "/post/[...slug]",
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
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300..800;1,300..800&display=swap" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" },
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"},
            ]
        }
    },

    css: ["@/assets/css/main.css"],

    modules: ["@nuxtjs/i18n"],

    i18n: {
        vueI18n: "./i18n.config.ts",
        locales: ["en", "pt"],
        defaultLocale: "pt",
    }
})