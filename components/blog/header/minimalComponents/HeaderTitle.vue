<template>
    <h1>os melhores <span>Artigos</span> onde eu comento e argumento sobre alguns temas</h1>
</template>


<script setup lang="ts">

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