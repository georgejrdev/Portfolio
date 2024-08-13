<template>
    <header>

        <NavBar 
            :pageLink="'/blog'"
            :pageName="'ver artigos'"
            :navigate="true"/>

        <div id="content">
            <div id="presentation">
                
                <MainTitle 
                :beforeEmphasis="'meu nome é George Júnior,'"
                :emphasis="'FullStack'"
                :afterEmphasis="'developer'"
                :marginBottom="'0'"
                />                

                <PortfolioHeaderMinimalComponentsHeaderLangs />
            </div>
            <PortfolioHeaderMinimalComponentsHeaderDecoration />
        </div>

    </header>
</template>


<script lang="ts" setup>
import HeaderLangs from "./minimalComponents/HeaderLangs.vue"


</script>


<style scoped>

    header{
        height: 100vh;
    }

    @media screen and (min-width: 1024px) {
        #content{
            height: 90vh;
            width:100vw;
            max-width: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        #presentation{
            margin: 0;
            width: 40vw;
            height: auto;
        }
    }

</style>
