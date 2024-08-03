<template>
    <section>
        <input id="back" type="button" value="" @click="back">

        <div id="read" ref="mainElement">
            <h1 ref="h1Element">{{ title }}</h1>
            <p id="author">~By <a target="_blank" id="author-link" href="https://portfolio-georgejrdev.vercel.app/">George Júnior</a></p>
            <p ref="pElement" v-html="content"></p>
        </div>
    </section>
</template>


<script setup lang="ts">
import { posts as initialPosts } from "~/assets/save/posts"

const route = useRoute()
const id = Number(route.params.id)

const title = ref("")
const content = ref("")

const back = () =>{
    const currentUrl = window.location.href
    const url = new URL(currentUrl)
    url.pathname = "/blog"
    window.location.href = url.toString()    
}

onMounted(() => {
    const post = initialPosts.find(p => p.id === id)
        
    if (post) {
        title.value = post.title
        content.value = post.content
    }
})
</script>


<style scoped>

    *{
        color:black;
        font-family: 'Inter';
        letter-spacing: 0.35px;
    }
    
    #back {
        position: fixed;
        top: 10px;
        right: 15px;
        width: 40px;
        height: 40px;
        border: 2px solid black;
        border-radius: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: white;
        cursor: pointer;
        background-image: url("~/assets/images/back.png");
    }

    section {
        width: 100vw;
        max-width: 100%;
        background-color: rgb(253, 253, 253);
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

    h4,h5,h6{
        margin-top: 5vh;
        margin-bottom: 5vh
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
        #back {
        	top: 10px;
        	right:15px;
    	}

        #read {
            margin: auto;
            max-width: 60%;
        }           
    }
</style>  