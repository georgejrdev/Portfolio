<template>

    <div @click="toPost(id)" d="post">

        <div id="content">
            <h2 :style="{color:color}">{{ title }}</h2>
        </div>

        <div id="info">
            <p id="p-info">{{ info }}</p>
        </div>

    </div>

</template>


<script setup lang="ts">

    interface Props {
        id:number
        title:string
        info:string
        color:string
    }

    const props = defineProps<Props>()

    function toPost(id:number){
        const currentUrl = window.location.href
        const url = new URL(currentUrl)
        url.pathname = `/post/${id}`
        window.location.href = url.toString()    
    }

</script>


<style scoped>

    div{
        cursor:pointer;
    }

    h2,p{
        margin:0;
        text-align: center;
    }
    
    h2 {
        font-size: 20px;
        max-width: 190px;
        width: 190px;
    }        

    #post{
        width: 210px;
        height: 210px;
        border-radius: 48px;
    }

    #content{
        width: 210px;
        height: 160px;
        border-radius: 48px 48px 0 0;
        background-color: var(--post);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #info{
        width: 210px;
        height: 50px;
        border-radius: 0 0 48px 48px;
        background-color: var(--info);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p{
        color: var(--p-info);
    }

</style>