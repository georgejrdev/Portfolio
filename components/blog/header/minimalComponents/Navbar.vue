<template>

    <div id="placeholder"></div>

    <nav>
        <div id="articles">
            <a href="/">ver portfólio</a>
        </div>

        <div id="links">
            <div @click="redirectToGithub()" id="github" class="link"></div>
            <div @click="redirectToLinkedin()" id="linkedin" class="link"></div>
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

    #links{
        margin-right:15px;
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

    a{
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
</style>