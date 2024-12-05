<template>

    <section id="projects">
        <h2>{{ $t("portfolio.otherProjects.mouseHover") }}</h2>

        <div id="project-container">

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-vocabulary"
                idAbout="about-vocabulary"
                :description="$t('portfolio.otherProjects.descriptions.vocabulary')"
                :urlImage="vocabularyImage"
                :deployed="true"
                urlDeploy="https://plus-vocabulary.vercel.app/"
                lang="Angular"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-audiobook-generator"
                idAbout="about-audiobook-generator"
                :description="$t('portfolio.otherProjects.descriptions.audiobook')"
                :urlImage="audiobookGeneratorImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/AudioBook-Generator"
                :deployed="true"
                urlDeploy="https://audiobook-generator-chi.vercel.app/"
                lang="Python"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-lib-utils"
                idAbout="about-lib-utils"
                :description="$t('portfolio.otherProjects.descriptions.libUtils')"
                :urlImage="libUtilsImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Lib-Utils"
                lang="Java"
            />

            <PortfolioProjectsMinimalComponentsProject 
            idContent="project-post-its"
            idAbout="about-post-its"
                :description="$t('portfolio.otherProjects.descriptions.postIts')"
                :urlImage="postItsImage"
                :github="true"
            urlGithub="https://github.com/georgejrdev/Post-Its"
                :deployed="true"
            urlDeploy="https://play.google.com/store/apps/details?id=com.georgejrdev.postits&pcampaignid=web_share"
                lang="JavaScript"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-path"
                idAbout="about-path"
                :description="$t('portfolio.otherProjects.descriptions.path')"
                :urlImage="pathImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Path"
                :deployed="true"
                urlDeploy="https://dev-path-io.vercel.app/"
                lang="VueJs"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-simple-text"
                idAbout="about-simple-text"
                :description="$t('portfolio.otherProjects.descriptions.simpleText')"
                :urlImage="simpleTextImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Simple-Text"
                lang="C++"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-mario"
                idAbout="about-mario"
                :description="$t('portfolio.otherProjects.descriptions.mario')"
                :urlImage="marioImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Mario-Mocap-Control"
                lang="Python"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-link-tree"
                idAbout="about-link-tree"
                :description="$t('portfolio.otherProjects.descriptions.linkTree')"
                :urlImage="linkTreeImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Link-Tree"
                :deployed="true"
                urlDeploy="https://georgejrdev.github.io/Link-Tree"
                lang="JavaScript"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-rating-system"
                idAbout="about-rating-system"
                :description="$t('portfolio.otherProjects.descriptions.ratingSystem')"
                :urlImage="ratingSystemImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Rating-System"
                :deployed="true"
                urlDeploy="https://ratingsystem003.000webhostapp.com/"
                lang="Php"
            />

            <PortfolioProjectsMinimalComponentsProject 
            idContent="project-shooter"
            idAbout="about-shooter"
                :description="$t('portfolio.otherProjects.descriptions.shooter')"
                :urlImage="shooterImage"
                :github="true"
            urlGithub="https://github.com/georgejrdev/My-Shooter-Friend"
                :deployed="true"
            urlDeploy="https://georgejrdev.github.io/My-Shooter-Friend"
                lang="TypeScript"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-hamburgueria"
                idAbout="about-hamburgueria"
                :description="$t('portfolio.otherProjects.descriptions.burger')"
                :urlImage="hamburgueriaImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Hamburgueria"
                :deployed="true"
                urlDeploy="https://hamburgueria-mocha.vercel.app"
                lang="VueJs"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-games-online"
                idAbout="about-games-online"
                :description="$t('portfolio.otherProjects.descriptions.gamesOnline')"
                :urlImage="gamesOnlineImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Games-Online"
                :deployed="true"
                urlDeploy="https://georgejrdev.github.io/Games-Online"
                lang="JavaScript"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-city-info"
                idAbout="about-city-info"
                :description="$t('portfolio.otherProjects.descriptions.infoCity')"
                :urlImage="cityInfoImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/City-Info-API"
                :deployed="true"
                urlDeploy="https://city-info-8z0g.onrender.com/?city=uberl%C3%A2ndia&lang=pt_br"
                lang="TypeScript"
            />

            <PortfolioProjectsMinimalComponentsProject
                idContent="project-organizador-pastas"
                idAbout="about-organizador-pastas"
                :description="$t('portfolio.otherProjects.descriptions.folders')"
                :urlImage="organizadorPastasImage"
                :github="true"
                urlGithub="https://github.com/georgejrdev/Automatic-Folder-Organizer"
                lang="Python"
            />

        </div>
    </section>

</template>


<script lang="ts" setup>

    import pathImage from "~/assets/images/projects/path.webp"
    import hamburgueriaImage from "~/assets/images/projects/hamburgueria.webp"
    import marioImage from "~/assets/images/projects/mario.webp"
    import gamesOnlineImage from "~/assets/images/projects/games-online.webp"
    import organizadorPastasImage from "~/assets/images/projects/organizador-de-pastas.webp"
    import libUtilsImage from "~/assets/images/projects/lib-utils.webp"
    import cityInfoImage from "~/assets/images/projects/info-city.webp"
    import ratingSystemImage from "~/assets/images/projects/rating-system.webp"
    import audiobookGeneratorImage from "~/assets/images/projects/audiobook-generator.webp"
    import linkTreeImage from "~/assets/images/projects/link-tree.webp"
    import shooterImage from "~/assets/images/projects/shooter.webp"
    import postItsImage from "~/assets/images/projects/postits.webp"
    import simpleTextImage from "~/assets/images/projects/simple-text.webp"
    import vocabularyImage from "~/assets/images/projects/vocabulary.webp"

</script>

<style scoped>

    section{
        margin-bottom: 5vh;
    }

    h2{
        width:100vw;
        max-width: 100%;
        text-align: center;   
        color: var(--subtitle-project);
    }

    #project-container {
        margin:auto;
        margin-top: 8vh;
        width:90vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 1024px) {
        h2 {
            width:100vw;
            max-width: 100%;
            text-align: center;
        }
    }
    
</style>
