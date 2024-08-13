<template>
    <section id="posts">
        <BlogPostsMinimalComponentsPost
            v-for="post in posts"
            :id="post.id"
            :title="post.title"
            :info="post.info"
            :color="post.color"/>
    </section>
</template>


<script setup lang="ts">
import type { Post, AllPosts } from "~/assets/save/posts"
import { allPosts } from "~/assets/save/posts"

const defaultLanguage: keyof AllPosts = "pt"

const posts = ref<Post[]>([])
const language = ref<keyof AllPosts>(defaultLanguage)

const initialize = () => {
    if (typeof window !== "undefined") {
        const storedLanguage = localStorage.getItem("language") as keyof AllPosts | null
        language.value = storedLanguage ?? defaultLanguage
        localStorage.setItem("language", language.value)
    }
    
    posts.value = allPosts[language.value] || []
}

onMounted(() => {
    initialize()
})
</script>


<style scoped>

    section {
        margin:auto;
        width: 90vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 50px;
    }

</style>