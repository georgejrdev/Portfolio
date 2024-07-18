<template>
<section>
    <input id="back" type="button" value="" @click="back">
    <input id="theme" type="button" value="" @click="toggleMode">

    <div id="read" ref="mainElement">
        <h1 ref="h1Element">{{ title }}</h1>
        <p ref="pElement" v-html="content"></p>
    </div>
</section>
</template>


<script setup lang="ts">
    import { posts as initialPosts } from '~/assets/save/posts';

    const route = useRoute();
    const id = Number(route.params.id);

    const title = ref('');
    const content = ref('');

    const darkMode = ref(true);
    const mainElement = ref<HTMLElement | null>(null);
    const h1Element = ref<HTMLElement | null>(null);
    const pElement = ref<HTMLElement | null>(null);

    const darkColors = {
        main: '#1C1B21',
        h1: '#CB9630',
        p: 'white'
    };

    const lightColors = {
        main: '#FFF',
        h1: '#165F51',
        p: 'black'
    };

    const applyColors = (colors: { main: string, h1: string, p: string }) => {
        if (mainElement.value) {
            mainElement.value.style.backgroundColor = colors.main;
        }
        if (h1Element.value) {
            h1Element.value.style.color = colors.h1;
        }
        if (pElement.value) {
            pElement.value.style.color = colors.p;
        }
    };

    const back = () =>{
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        url.pathname = `/blog`;
        window.location.href = url.toString();    
    }

    const toggleMode = () => {
        darkMode.value = !darkMode.value;

        if (darkMode.value) {
            applyColors(darkColors);
        } else {
            applyColors(lightColors);
        }

        localStorage.setItem('darkMode', JSON.stringify(darkMode.value));
    };

    onMounted(() => {
        const savedMode = localStorage.getItem('darkMode');

        if (savedMode) {
            darkMode.value = JSON.parse(savedMode);
        }

        if (darkMode.value) {
            applyColors(darkColors);
        } else {
            applyColors(lightColors);
        }

        const post = initialPosts.find(p => p.id === id);
        if (post) {
            title.value = post.title;
            content.value = post.content;
        }
    });
</script>


<style scoped>

    #theme{
        background-image: url("~/assets/images/theme.png");
    }

    #back {
        top: 10px;
        background-image: url("~/assets/images/back.png");
    }

    input {
        position: absolute;
        top: 80px;
        right: 10px;
        border: 2px solid black;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 80%;
        background-color: white;
        cursor: pointer;
    }

    h1 {
        color: var(--title-emphasis);
        text-align: center;
        font-size: 36px;
        transition: color 0.5s;
    }

    p {
        margin: auto;
        margin-top: 10vh;
        font-weight: lighter;
        width: 90%;
        transition: color 0.5s;
    }

    #read {
        padding-top: 8vh;
        padding-bottom: 8vh;
        width: 100vw;
        max-width: 100%;
        height: auto;
        background-color: rgb(28, 27, 33);
        transition: background-color 0.5s;
    }

    @media screen and (min-width:1024px) {
        #read {
            margin: auto;
            width: 90vw;
            max-width: 90%;
        }
    }
</style>  