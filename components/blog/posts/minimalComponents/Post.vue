<template>

    <div @click="toPost(id)" id="post" :style="{backgroundColor: backgroundColor}">
        <h2 :style="{color: color}">{{title}}</h2>

        <div id="tags">
            <div v-for="(tag, index) in tags" :style="{backgroundColor: getTagColor(tag)}" :key="index" class="tag">
                <p class="tag-text">{{tag.toUpperCase()}}</p>
            </div>
        </div>
    </div>

</template>


<script setup lang="ts">

    interface Props {
        id:number
        title:string
        color:string
        tags: string[]
    }

    const props = defineProps<Props>()
    const backgroundColor = ((props.id % 2) == 0) ? "#2B2932" : "#26242D"
    const tags = props.tags

    const toPost = (id:number) => {
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        url.pathname = `/post/${id}`
        window.location.href = url.toString()    
    }

    const getTagColor = (tag: string) =>{
        const generic = "#74BD51"

        const colors = {
            "VSCODE": "#3D3BAD",
            "PHP": "#8417B8",
            "PYTHON": "#3257B7",
            "JAVASCRIPT": "#F0DB4F",
            "GO": "#00ADD8",
            "JAVA": "#EA6F00",
            "HTML": "#E34C26",
            "CSS": "#264DE4",
            "C#": "#178600",
            "C++": "#00599C",
            "C": "#555555",
            "RUBY": "#CC342D",
            "R": "#198CE7",
            "SHELL": "#89E051",
            "BASH": "#89E051",
            "SWIFT": "#F05138",
            "KOTLIN": "#FEFEFE",
            "GIT": "#F05032",
            "TYPESCRIPT": "#3178C6",
            "BEGINNERS": "#FF6EEC",
        }

        return (colors as any)[tag.toUpperCase()] ?? generic
    }

</script>


<style scoped>

    div{
        cursor:pointer;
    }

    h2{
        margin:0;
        text-align: left;
        width: 50%;
    }
    
    h2 {
        font-size: 15px;
    }        

    #post{
        width: 80vw;
        padding: 15px;
        height: 45px;
        display: flex;
        align-items: center;
    }
    
    #tags{
        display: flex;
        width: 50%;
        gap: 5px;
        align-items: center;
        justify-content: end;
    }

    .tag{
        padding: 5px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
    }

    .tag-text{
        color: black;
    }

    @media screen and (max-width: 600px) {
        #post{
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            height: auto;
        }

        h2{
            width: 100%;
        }

        #tags{
            width: 100%;
            justify-content: flex-start
        }
    }

</style>