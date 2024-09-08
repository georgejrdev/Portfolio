<template>

    <section id="projects">
        <h2>{{ $t("portfolio.otherProjects.mouseHover") }}</h2>

        <div id="project-container">

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-path'"
                :idAbout="'about-path'"
                :description="$t('portfolio.otherProjects.descriptions.path')"
                :urlImage="pathImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Path'"
                :deployed="true"
                :urlDeploy="'https://dev-path-io.vercel.app/'"
                :lang="'VueJs'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-hamburgueria'"
                :idAbout="'about-hamburgueria'"
                :description="$t('portfolio.otherProjects.descriptions.burger')"
                :urlImage="hamburgueriaImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Hamburgueria'"
                :deployed="true"
                :urlDeploy="'https://hamburgueria-mocha.vercel.app'"
                :lang="'VueJs'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-mario'"
                :idAbout="'about-mario'"
                :description="$t('portfolio.otherProjects.descriptions.mario')"
                :urlImage="marioImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Mario-Mocap-Control'"
                :lang="'Python'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-games-online'"
                :idAbout="'about-games-online'"
                :description="$t('portfolio.otherProjects.descriptions.gamesOnline')"
                :urlImage="gamesOnlineImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Games-Online'"
                :deployed="true"
                :urlDeploy="'https://georgejrdev.github.io/Games-Online'"
                :lang="'JavaScript'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-organizador-pastas'"
                :idAbout="'about-organizador-pastas'"
                :description="$t('portfolio.otherProjects.descriptions.folders')"
                :urlImage="organizadorPastasImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Automatic-Folder-Organizer'"
                :lang="'Python'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-lib-utils'"
                :idAbout="'about-lib-utils'"
                :description="$t('portfolio.otherProjects.descriptions.libUtils')"
                :urlImage="libUtilsImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Lib-Utils'"
                :lang="'Java'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-city-info'"
                :idAbout="'about-city-info'"
                :description="$t('portfolio.otherProjects.descriptions.infoCity')"
                :urlImage="cityInfoImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/City-Info-API'"
                :deployed="true"
                :urlDeploy="'https://city-info-8z0g.onrender.com/?city=uberl%C3%A2ndia&lang=pt_br'"
                :lang="'TypeScript'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-rating-system'"
                :idAbout="'about-rating-system'"
                :description="$t('portfolio.otherProjects.descriptions.ratingSystem')"
                :urlImage="ratingSystemImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Rating-System'"
                :deployed="true"
                :urlDeploy="'https://ratingsystem003.000webhostapp.com/'"
                :lang="'Php'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-audiobook-generator'"
                :idAbout="'about-audiobook-generator'"
                :description="$t('portfolio.otherProjects.descriptions.audiobook')"
                :urlImage="audiobookGeneratorImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/AudioBook-Generator'"
                :deployed="true"
                :urlDeploy="'https://audiobook-generator-chi.vercel.app/'"
                :lang="'Python'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-toolkit'"
                :idAbout="'about-toolkit'"
                :description="$t('portfolio.otherProjects.descriptions.toolKit')"
                :urlImage="toolkitImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/ToolKit-Development'"
                :lang="'Java'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-link-tree'"
                :idAbout="'about-link-tree'"
                :description="$t('portfolio.otherProjects.descriptions.linkTree')"
                :urlImage="linkTreeImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Link-Tree'"
                :deployed="true"
                :urlDeploy="'https://georgejrdev.github.io/Link-Tree'"
                :lang="'JavaScript'"
            />

        </div>
    </section>

</template>


<script lang="ts" setup>

    import pathImage from "~/assets/images/projects/path.png"
    import hamburgueriaImage from "~/assets/images/projects/hamburgueria.png"
    import marioImage from "~/assets/images/projects/mario.png"
    import gamesOnlineImage from "~/assets/images/projects/games-online.png"
    import organizadorPastasImage from "~/assets/images/projects/organizador-de-pastas.png"
    import libUtilsImage from "~/assets/images/projects/lib-utils.png"
    import cityInfoImage from "~/assets/images/projects/info-city.png"
    import ratingSystemImage from "~/assets/images/projects/rating-system.png"
    import audiobookGeneratorImage from "~/assets/images/projects/audiobook-generator.png"
    import toolkitImage from "~/assets/images/projects/toolkit.png"
    import linkTreeImage from "~/assets/images/projects/link-tree.png"

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
