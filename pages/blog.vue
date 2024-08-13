<template>
    <BlogHeader />
    <main>
        <BlogPosts />
    </main>

    <Footer />
</template>


<script setup lang="ts">
useHead({
    title: "Blog - George Júnior"
})
</script>


<style scoped>
    main{
        padding-bottom: 10vh;
    }
</style>