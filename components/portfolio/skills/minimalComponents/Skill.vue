<template>
    
    <img :src="background" :alt="alt" :title="alt">

</template>


<script lang="ts" setup>

    interface Props {
        background: string
        alt: string
    }

    defineProps<Props>()
    
</script>


<style scoped>

    img{
        display: flex;
        justify-content: center;
        align-items: center;    
        width: 64px;
        height: 64px;
    }

    p {
        color: var(--text);
    }

</style>