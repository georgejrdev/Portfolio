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
                <p v-if="youtube" class="author">{{ $t("blog.authorInfos.youtube") }} <a target="_blank" class="author-info" id="youtube-link" :href="youtube">Youtube</a></p>
                <p class="author">{{ $t("blog.authorInfos.by") }} <a target="_blank" class="author-info" id="author-link" href="https://georgejrdev.github.io/Link-Tree">George Júnior</a></p>
            </header>

            <main>
                <p ref="pElement" v-html="content"></p>
            </main>
        </div>
    </div>
</template>


<script setup lang="ts">

    import type { Post } from "~/utils/posts"
    import { setPostsInCookies, getPostsFromCookies } from "~/utils/cookies"
    
    const route = useRoute()
    const id = Number(route.params.id)
    const title = ref<string>("")
    const content = ref<string>("")
    const youtube = ref<string>("")

    const { locale, setLocale } = useI18n()
    const { $getPosts } = useNuxtApp();

    const changeLanguage = (newLanguage: string) => {
        setLocale(newLanguage)
        localStorage.setItem("language", newLanguage)
    }

    const posts = ref<Post[]>([])
    const error = ref<string | null>(null)

    const titleKeyLanguage: keyof Post = (locale.value == 'pt') ? 'ptTitle' : 'enTitle'
    const contentKeyLanguage: keyof Post = (locale.value == 'pt') ? 'ptContent' : 'enContent'

    const back = () => {
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        url.pathname = "/blog"
        window.location.href = url.toString()
    }

    const loadPost = () => {
        if (posts.value[id]) {
            title.value = posts.value[id][titleKeyLanguage] || "Title not found."
            content.value = posts.value[id][contentKeyLanguage] || "Content not found."
            youtube.value = posts.value[id].youtube || ""

        } else {
            error.value = "Post not found."
        }
    }

    const readLambdaPosts = async () => {
        const response = await $getPosts()
        error.value = response[1]

        if (error.value || response[0] == null) return
        
        const sortedPosts = response[0].sort((a: Post, b: Post) => a.id - b.id)
        posts.value = sortedPosts
        
        loadPost()
    }

    if (getPostsFromCookies().length > 0) {
        posts.value = getPostsFromCookies()
        loadPost() 
        console.log("Read from cookies")

    } else {
        readLambdaPosts()
        setPostsInCookies(posts.value, 12)
        console.log("Read from lambda")
    }

    onMounted(() => {
        if (import.meta.client){
            const storeLanguage = localStorage.getItem("language")

            if (!storeLanguage){
                localStorage.setItem("language", "pt")
                setLocale("pt")

            } else {
                setLocale(storeLanguage)
            }
        }
    })

</script>


<style scoped>

    *,:deep() span {
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

    :deep() .article-code {
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
        background-image: url("~/assets/images/back.webp");
    }

    #pt {
        top: 60px;
        right: 15px;
        background-image: url("~/assets/images/pt.webp");
        background-size: 60%;
    }

    #en {
        top: 110px;
        right: 15px;
        background-image: url("~/assets/images/en.webp");
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
    
    .author, .author-info {
        margin-top: 5px;
        font-size: small;
        font-weight: 400;
        text-align: center;
        color: rgb(80, 80, 80);
    }

    #youtube-link {
        color: red;
    }

    #youtube-link:hover {
        color: rgb(223, 2, 2);
    }

    #author-link {
        color: black;
    }

    #author-link:hover {
        color: rgb(110, 110, 110);
    }
    
    :deep() h3 {
        font-family: 'Inter';
        color: black;
        letter-spacing: 0.35px;
        text-align: left;
        font-weight: 550;
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    :deep() h4,:deep() h5,:deep() h6, :deep() strong {
        font-family: 'Inter', sans-serif;
    }

    :deep() span, :deep() s {
        font-weight: normal;
        font-family: 'Inter', sans-serif;
    }

    #read {
        padding: 50px;
        box-sizing: border-box;
        max-width: 100%;
        height: auto;
        background-color: white;
    }   

    :deep() .reference {
        display: block;
        color: rgb(51, 123, 218);
    }

    :deep() .reference:hover {
        display: block;
        color: rgb(31, 95, 179);
    }

    @media screen and (min-width:1024px) {
        #read {
            margin: auto;
            max-width: 60%;
        }           
    }

</style>  