<template>
    <header>
        <NavBar
            :pageLink="'/'"
            :pageName="'ver portfolio'"
            :navigate="false"
        />

        <div id="content">
            
            <MainTitle 
                :beforeEmphasis="'Eu sou George Júnior e estes são os melhores'"
                :emphasis="'Artigos'"
                :afterEmphasis="'que eu escrevi'"
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