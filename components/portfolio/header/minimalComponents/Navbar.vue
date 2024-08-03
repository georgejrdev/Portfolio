<template>

    <div id="placeholder"></div>

    <nav>
        <div id="articles">
            <a href="/blog">ver artigos</a>
        </div>

        <div id="buttons">
            <div id="navigate">
                <p @click="scrollTo('desktop-project')">projetos</p>
                <p @click="scrollTo('about-me')" >sobre mim</p>
                <p @click="scrollTo('contact')" >contato</p>
            </div>

            <div id="links">
                <div @click="redirectToGithub()" id="github" class="link"></div>
                <div @click="redirectToLinkedin()" id="linkedin" class="link"></div>
            </div>
        </div>
    </nav>
</template>


<script lang="ts" setup>

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

    #articles{
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

    #links{
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
        background-image: url("~/assets/images/github.png");
    }

    #linkedin{
        background-image: url("~/assets/images/linkedin.png");
    }

    @media screen and (min-width: 1024px) {
        #navigate{
            display: flex;
        }
    }
</style>