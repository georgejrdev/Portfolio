<template>
    <section :id="idSection">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        
        <div :style="{ backgroundImage: `url(${urlImage})` }" id="image" class="image-project"></div>

        <div id="buttons" class="project-buttons">
            <PortfolioItensLinkButton text="GITHUB" :link="urlGithub" backgroundColor="#2C2C2C" />
            <PortfolioItensLinkButton text="DEPLOY" :link="urlDeploy" backgroundColor="#5A5A5A" />
        </div>
    </section>
</template>


<script lang="ts" setup>
import { onMounted, onBeforeUnmount, defineProps } from "vue"
import { adjustSection } from "~/utils/changeElementsOrder"

interface Props {
    idSection: string;
    title: string;
    description:string;
    urlImage:string;
    urlDeploy:string;
    urlGithub:string;
    direction:string;
}

const props = defineProps<Props>()

function adjustProjectStructure() {
    adjustSection(props.idSection,props.direction)
}

onMounted(() => {
    adjustProjectStructure()
    window.addEventListener("resize", adjustProjectStructure)
})

onBeforeUnmount(() => {
    window.removeEventListener("resize", adjustProjectStructure)
})
</script>


<style scoped>

    section {
        padding-top: 5vh;
        height: 95vh;
    }

    p {
        margin: auto;
        margin-top: 2vh;
        width: 85vw;
        text-align: center;
    }

    #buttons {
        margin: auto;
        margin-top: 10vh;
        width: 90vw;
        display: flex;
        justify-content: space-around;
    }

    #image {
        margin: auto;
        margin-top: 8vh;
        width: 80vw;
        height: 30vh;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .project-content {
        width: 35vw;
        max-height: 70vh;
    }

    @media screen and (min-width: 1024px) {
        section {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        h2 {
            margin: 0;
            width: 80%;
            text-align: left;
        }

        p {
            margin: 0;
            margin-top: 5vh;
            text-align: left;
            width: 100%;
        }

        #buttons {
            width: 100%;
            justify-content: initial;
            column-gap: 5vw;
        }

        #content {
            width: 35vw;
            max-height: 70vh;
        }

        #image {
            margin: 0;
            height: 70vh;
            width: 40vw;
            background-size: contain;
        }
    }
</style>