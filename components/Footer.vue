<template>
    <footer>
        <p id="framework">{{ $t("footer.message") }}<span> Nuxt Js</span></p>
        <p id="rights">© 2024 - George Júnior. {{ $t("footer.rights") }}.</p>
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