<template>
    
    <div :style="{ backgroundColor: backgroundColor }">
        <p>{{ text }}</p>
    </div>

</template>


<script lang="ts" setup>

    interface Props {
        backgroundColor: string;
        text: string;
    }

    defineProps<Props>()
    
</script>


<style scoped>

    div{
        display: flex;
        justify-content: center;
        align-items: center;    
        border-radius:48px;
        width: 100px;
        height: 50px;
    }

    p {
        color: var(--text);
    }

    @media screen and (min-width: 1024px) {
        div {
            width: 200px;
            height: 60px;
        }
    }

</style>