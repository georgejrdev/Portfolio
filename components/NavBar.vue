<template>

    <div id="placeholder"></div>

    <nav>
        <div id="page">
            <a :href="pageLink">{{ pageName }}</a>
        </div>

        <div id="buttons">
            
            <div v-if="props.navigate" id="navigate">
                <p @click="scrollTo('desktop-project')">{{ $t('nav.projects') }}</p>
                <p @click="scrollTo('about-me')" >{{ $t('nav.about') }}</p>
                <p @click="scrollTo('contact')" >{{ $t('nav.contact') }}</p>
            </div>

            <div id="links">
                <div id="links-container" v-if="showLinks">
                    <div @click="redirectToGithub()" id="github" class="link"></div>
                    <div @click="redirectToLinkedin()" id="linkedin" class="link"></div>
                </div>

                <div id="language-container" v-if="showLang">
                    <div @click="setLanguage('pt')" id="pt" class="link"></div>
                    <div @click="setLanguage('en')" id="en" class="link"></div>
                </div>
                
                <div @click="showSelectLanguage()" id="language" class="link"> </div>
            </div>

        </div>
    </nav>
    
</template>


<script lang="ts" setup>

    interface Props {
        pageName:string
        pageLink:string
        navigate:boolean
    }

    const props = defineProps<Props>()

    function redirectToGithub(){
        window.open("https://github.com/georgejrdev", "_blank")
    }    

    function redirectToLinkedin(){
        window.open("https://www.linkedin.com/in/georgejrdev/", "_blank")
    }

    function scrollTo(id:string){
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView()
        }
    }

    const { setLocale } = useI18n()

    let showLang = ref(false)
    let showLinks = ref(true)

    function showSelectLanguage(){
        showLang.value = !showLang.value
        showLinks.value = !showLinks.value
    }

    function setLanguage(language:string){
        setLocale(language)
        localStorage.setItem("language", language)
        showSelectLanguage()
    }

</script>


<style scoped>

    #placeholder{
        height: 10vh;
        width: 100vw;
        max-width: 100%;
    }

    nav{
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        width: 100vw;
        max-width: 100%;
        height: 10vh;
        background-color:var(--navbar);
    }

    #page{
        margin-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #buttons{
        margin-right:15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #links, #links-container, #language-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

    .link{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        cursor:pointer;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }   

    #navigate{
        display: none;
        margin-right: 15px;
        gap: 20px;
    }

    a,p{
        text-decoration: none;
        cursor:pointer;
    }

    a{
        background: var(--articles);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    p{
        color:var(--text);
    }

    p:hover{
        color:var(--navigate-hover);
    }

    #github{
        background-image: url("~/assets/images/github.webp");
    }

    #linkedin{
        background-image: url("~/assets/images/linkedin.webp");
    }

    #language{
        background-size: 60%;
        background-color: rgb(0, 0, 0);
        background-image: url("~/assets/images/language.png");
    }

    #pt{
        background-size: 60%;
        background-image: url("~/assets/images/pt.webp");
    }
    
    #en{
        background-size: 60%;
        background-image: url("~/assets/images/en.webp");
    }

    @media screen and (min-width: 1024px) {
        #navigate{
            display: flex;
        }
    }

</style>