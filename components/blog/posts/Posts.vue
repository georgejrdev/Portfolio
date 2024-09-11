<template>
    <section id="posts">

        <BlogPostsMinimalComponentsPost
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :title="post.title"
            :info="post.info"
            :color="post.color"
        />

    </section>
</template>


<script setup lang="ts">

    import type { Post, AllPosts } from "~/assets/save/posts"
    import { allPosts } from "~/assets/save/posts"

    const defaultLanguage: keyof AllPosts = "pt"

    const language = ref<keyof AllPosts>(defaultLanguage)

    const posts = computed((): Post[] => {
        return allPosts[language.value] || []
    })

    if (process.client) {
        const storedLanguage = localStorage.getItem("language") as keyof AllPosts | null
        language.value = storedLanguage ?? defaultLanguage
        localStorage.setItem("language", language.value)
    }

</script>


<style scoped>
    section {
        margin: auto;
        width: 90vw;
    }
</style>
