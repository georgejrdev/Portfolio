<template>
    <footer>
        <p id="framework">feito com <span>Nuxt Js</span></p>
        <p id="rights">© 2024 - George Júnior. Todos os direitos reservados.</p>
    </footer>
</template>


<script setup lang="ts">

</script>


<style scoped>
    footer{
        padding-top: 5vh;
        padding-bottom: 5vh;
        background-color: var(--footer);
    }

    p{
        margin: auto;
        width: 90vw;
        text-align: center;
        color: #909090;
    }

    span{
        color:#22947F;
    }

    #rights{
        margin-top:2vh;
    }
</style>