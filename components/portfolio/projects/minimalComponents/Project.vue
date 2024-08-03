<template>
    <div>
        <div :style="{ backgroundImage: `url(${urlImage})` }" v-show="showContentSection" ref="contentProject" class="project-content" @mouseenter="showAbout" @mouseleave="hideAbout"></div>

        <div ref="aboutProject" class="project-about" v-show="showAboutSection" @mouseenter="cancelHideTimer" @mouseleave="hideAbout">
            <p>{{ description }}</p>

            <p ref="langText" class="lang">{{ lang }}</p>

            <div class="group-buttons">
                <input v-if="deployed" @click="toLink(props.urlDeploy)" class="project-buttons project-deploy" type="button" value="Deploy">
                <input v-if="github" @click="toLink(props.urlGithub)" class="project-buttons project-github" type="button" value="Github">
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { defineProps, ref } from "vue"

interface Props {
    lang:string
    idContent: string;
    idAbout: string;
    deployed?: boolean;
    github?: boolean;
    urlDeploy?: string;
    urlGithub?: string;
    description: string;
    urlImage: string;
}

const langText = ref<HTMLElement | null>(null)
const props = defineProps<Props>()
const showAboutSection = ref(false)
const showContentSection = ref(true)
let hideTimer: ReturnType<typeof setTimeout> | null = null

const showAbout = () => {
    if (hideTimer !== null) {
        clearTimeout(hideTimer)
    }
    showContentSection.value= false
    showAboutSection.value = true
}
    
const hideAbout = () => {
    hideTimer = setTimeout(() => {
        showAboutSection.value = false
        showContentSection.value= true
    }, 20)
}

const cancelHideTimer = () => {
    if (hideTimer !== null) {
        clearTimeout(hideTimer)
    }
}

function toLink(link:string | undefined){
    window.open(link,"_blank")
}

onMounted(()=>{
    let colors:Record<string,string> = {
        "java":"#C96A14",
        "python":"#153380",
        "php":"#6E14C9",
        "typescript":"#4e4ef7",
        "vuejs":"#17631F",
        "nuxtjs":"#39a344",
        "javascript":"#c4b241",
    }

    let color:string = colors[props.lang.trim().toLowerCase()]

    if (langText.value){
        langText.value.style.backgroundColor = color
    }
})
</script>


<style scoped>
    .project-content {
        width: 320px;
        height: 214px;
        padding: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .project-about {
        width: 320px;
        height: 214px;
        background-color: #E4D4F3;
        padding: 10px;
    }

    p{
        color: #000;
    }

    .lang{
        margin-top: 3vh;
        padding: 8px;
        min-width: 20px;
        max-width: 100px;
        color: #FFF;
    }

    input{
        cursor:pointer;
        border: 0px;
        padding: 8px;
        margin-top: 4vh;
        width: 45%;
    }
    
    .project-github{
        color:#FFF;
        background-color: #000;
    }

    .project-deploy{
        color: #000;
        background-color: #FFF;
        margin-right: 15px;
    }
</style>
