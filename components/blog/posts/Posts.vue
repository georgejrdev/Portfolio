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
    import { posts } from '~/assets/save/posts';
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