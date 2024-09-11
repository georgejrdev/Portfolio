<template>
    <div>
        <nav>
            <input class="button" id="back" type="button" value="" @click="back">
            <input class="button" id="pt" type="button" value="" @click="changeLanguage('pt')">
            <input class="button" id="en" type="button" value="" @click="changeLanguage('en')">
        </nav>

        <div id="read" ref="mainElement">
            <header>
                <h1 ref="h1Element">{{ title }}</h1>
                <p id="author">~By <a target="_blank" id="author-link" href="https://portfolio-georgejrdev.vercel.app/">George Júnior</a></p>
            </header>

            <main>
                <p ref="pElement" v-html="content"></p>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">

    import type { AllPosts, Post } from "~/assets/save/posts"
    import { allPosts as initialPosts } from "~/assets/save/posts"

    const defaultLanguage: keyof AllPosts = "pt"
    const route = useRoute()
    const id = Number(route.params.id)

    const language = ref<keyof AllPosts>(defaultLanguage)
    const title = ref<string>("")
    const content = ref<string>("")

    const back = () => {
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        url.pathname = "/blog"
        window.location.href = url.toString()
    }

    const { setLocale } = useI18n()

    const changeLanguage = (newLanguage: string) => {
        setLocale(newLanguage)
        localStorage.setItem("language", newLanguage)
        language.value = newLanguage as keyof AllPosts

        const post = initialPosts[language.value].find((p: Post) => p.id === id)
        
        if (post) {
            title.value = post.title
            content.value = post.content
        }
    }

    const post = computed(() => {
        return initialPosts[language.value].find((p: Post) => p.id === id) || { title: '', content: '' }
    })

    title.value = post.value.title
    content.value = post.value.content

    if (process.client) {
        const storedLanguage = localStorage.getItem("language") as keyof AllPosts | null
        language.value = storedLanguage ?? defaultLanguage

        const post = initialPosts[language.value].find((p: Post) => p.id === id)

        if (post) {
            title.value = post.title
            content.value = post.content
        }
    }

</script>


<style scoped>

    *,::v-deep span {
        color: black;
        font-family: 'Inter';
        letter-spacing: 0.35px;
    }

    .button {
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: black;
        cursor: pointer;
    }

    ::v-deep .article-code {
        display: block;
        background-color: var(--code-background);
        color: white;
        font-family: "JetBrains Mono", monospace;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        padding: 30px;
    }

    #back {
        top: 10px;
        right: 15px;
        background-image: url("~/assets/images/back.png");
    }

    #pt {
        top: 60px;
        right: 15px;
        background-image: url("~/assets/images/pt.png");
        background-size: 60%;
    }

    #en {
        top: 110px;
        right: 15px;
        background-image: url("~/assets/images/en.png");
        background-size: 60%;
    }
    
    div {
        width: 100vw;
        max-width: 100%;
        background-color: rgb(253, 253, 253);
        min-height: 100vh;
    }

    h1 {
        font-size: xx-large;
        text-align: center;
    }

    p {
        font-weight: normal;
    }

    #author,#author-link {
        font-size: small;
        font-weight: 400;
        text-align: center;
        color: rgb(80, 80, 80);
    }

    ::v-deep h3 {
        font-family: 'Inter';
        color: black;
        letter-spacing: 0.35px;
        text-align: left;
        font-weight: 550;
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    h4,h5,h6 {
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    ::v-deep span {
        font-weight: normal;
    }

    #read {
        padding: 10vw;
        padding-top: 12vh;
        padding-bottom: 8vh;
        max-width: 100%;
        height: auto;
        background-color: white;
    }

    @media screen and (min-width:1024px) {
        #read {
            margin: auto;
            max-width: 60%;
        }           
    }

</style>  