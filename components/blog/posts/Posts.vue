<template>
<section id="posts">
    <BlogPostsMinimalComponentsPost
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :title="(locale == 'pt') ? post.ptTitle : post.enTitle"
        :tags="post.tags"
        :color="post.color"
    />
</section>

</template>


<script setup lang="ts">

    import type { Post } from "~/utils/posts"
    import { setPostsInCookies, getPostsFromCookies } from "~/utils/cookies"

    const { locale } = useI18n()
    const { $getPosts } = useNuxtApp();

    const posts = ref<Post[]>([]);
    const error = ref<string | null>(null);

    const readLambdaPosts = async () => {
        const response = await $getPosts();
        error.value = response[1];

        if (error.value) return
        if (response[0] == null) return
        
        const sortedPosts = response[0].sort((a: Post, b: Post) => a.id - b.id);
        posts.value = sortedPosts;
    }

    if (getPostsFromCookies().length > 0) {
        posts.value = getPostsFromCookies();
        console.log("Read from cookies")

    } else {
        readLambdaPosts();
        setPostsInCookies(posts.value, 12);
        console.log("Read from lambda")
    }


</script>


<style scoped>

    section {
        margin: auto;
        width: 90vw;
        display: flex;
        flex-direction: column-reverse
    }

</style>
