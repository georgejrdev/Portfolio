<template>
    <div @click="toLink(link)" :style="{ backgroundColor: backgroundColor }"><p>{{ text }}</p></div>
</template>


<script lang="ts" setup>
    interface Props {
        backgroundColor: string;
        text: string;
        link:string;
    }

    defineProps<Props>();

    function toLink(link:string){
        window.open(link, "_blank");
    }
</script>


<style scoped>

    div{
        display:flex;
        width: 150px;
        height: 50px;
        border: 0px;
        border-radius: 48px;
        align-items: center;
        justify-content: center;
        cursor:pointer;
    }

    p{
        color: var(--project-link);
    }

</style>