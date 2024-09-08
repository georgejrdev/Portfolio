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

    const { setLocale } = useI18n()

    onMounted(() => {
        let language = localStorage.getItem("language")

        if (!language){
            language = "pt"
            localStorage.setItem("language", language)
        }
        
        setLocale(language)
    })
    
</script>


<style scoped>

    main{
        padding-bottom: 10vh;
    }

</style>