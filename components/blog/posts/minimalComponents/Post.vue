<template>

    <div @click="toPost(id)" id="post" :style="{backgroundColor: backgroundColor}">
        <h2 :style="{color: color}">{{title}}</h2>

        <div id="tags">
            <div v-for="(tag, index) in tags" :key="index" class="tag">
                <p>{{tag}}</p>
            </div>
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
    const backgroundColor = ((props.id % 2) == 0) ? "#2B2932" : "#26242D"
    const tags = ["web", "mobile"] // ATENÇÃO AQUI BRO

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

    h2{
        margin:0;
        text-align: left;
    }
    
    h2 {
        font-size: 15px;
    }        

    #post{
        width: 80vw;
        height: 40px;
        padding: 15px;
        display: flex;
        align-items: center;
    }
    
    #tags{
        display: flex;
        gap: 5px;
    }

    .tag{
        padding: 5px;
        font-family: "Inter", sans-serif;
        font-size: 12px;
        background-color: rgb(116, 116, 9); /* SÓ PRA TESTE MAN */
    }

</style>