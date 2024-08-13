<template>
    <section id="about-me">
        <div id="about-me-content">
            <h2>{{ $t("portfolio.aboutMe.title") }}</h2>
            <p id="description">{{ $t("portfolio.aboutMe.description") }}</p>
            <h3>{{ $t("portfolio.aboutMe.education") }}</h3>
            <p class="school">{{ $t("portfolio.aboutMe.educations.schoolOne") }}</p>
            <p class="school">{{ $t("portfolio.aboutMe.educations.schoolTwo") }}</p>
        </div>

        <div id="decoration"></div>
    </section>
</template>


<script setup lang="ts">

</script>


<style scoped>

    section{
        padding-top: 5vh;
        height: 95vh;
    }

    #description{
        margin: auto;
        margin-top: 2vh;
        width: 85vw;
        text-align: center;
    }

    .school{
        margin: auto;
        margin-top: 2vh;
        color: var(--text);
        width: 90vw;
        text-align: center;
    }

    #decoration{
        margin: auto;
        margin-top: 10vh;
        width: 85vw;
        height: 30vh;
        border-radius: 48px;
        background-image: url("~/assets/images/code-decoration-1.png");
        background-repeat: no-repeat;
        background-color: var(--decoration);
        background-size: 130%;
    }

    @media screen and (min-width: 1024px) {
        section{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        #about-me-content{
            width: 35vw;
            height: auto;
        }

        #description{
            margin: 0;
            margin-top: 5vh;
            text-align: left;
            width: 100%;
        }

        .school{
            margin: 0;
            margin-top: 2vh;
            text-align: left;
            width: 100%;
        }

        #decoration{
            margin: 0;
            width: 40vw;
            height: 70vh;
        }
    }

</style>