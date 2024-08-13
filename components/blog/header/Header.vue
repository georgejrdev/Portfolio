<template>
    <header>
        <NavBar
            :pageLink="'/'"
            :pageName="$t('nav.seePortfolio')"
            :navigate="false"
        />

        <div id="content">
            
            <MainTitle 
                :beforeEmphasis="$t('blog.title.before')"
                :emphasis="$t('blog.title.emphasis')"
                :afterEmphasis="$t('blog.title.after')"
                :marginBottom="'1vh'"
            />
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

    #content{
        min-height: 50vh;
    }

    @media screen and (min-width:1024px) {
        #content{
            display: flex;
            margin-left: 100px;
            align-items: center;
        }
    }
        
</style>