<template>
   
   <h1>
        {{ props.beforeEmphasis }}
        <span :style="{marginBottom:props.marginBottom}">{{ props.emphasis }}</span>
        {{ props.afterEmphasis }}
    </h1>

</template>


<script setup lang="ts">

    interface Props{
        beforeEmphasis:string
        emphasis:string
        afterEmphasis:string
        marginBottom:string
    }

    const props = defineProps<Props>()

</script>


<style scoped>

    h1{
        margin: auto;
        margin-top: 5vh;
        width: 90vw;
        font-size: 25px;
        text-align: center;
        color: var(--text);
    }

    span {
        display: block;
        font-size: 72px;
        color:var(--title-emphasis);
    }
    
    @media screen and (min-width: 1024px) {
        h1{
            margin: 0;
            text-align: left;
            max-width: 100%;        
        }    
    }

</style>