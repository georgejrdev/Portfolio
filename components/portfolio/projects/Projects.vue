<template>
    <section id="projects">
        <h2>passe o mouse nos projetos</h2>

        <div id="project-container">
            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-path'"
                :idAbout="'about-path'"
                :description="'Um site feito para guiar iniciantes na área de TI, mostrando um caminho à seguir com material de referência.'"
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
                :description="'Criação de um site moderno para uma hamburgueria, destacando o menu, a história e as informações de contato.'"
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
                :description="'Uma nova forma de jogar Super Mario: utilize movimentos reais usando uma câmera para jogar.'"
                :urlImage="marioImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Mario-Mocap-Control'"
                :lang="'Python'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-games-online'"
                :idAbout="'about-games-online'"
                :description="'Um site que agrega jogos de navegador, com sistema de pontuação individual para cada jogo.'"
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
                :description="'Ferramenta para organizar arquivos, facilitando a busca e a classificação dos arquivos.'"
                :urlImage="organizadorPastasImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Automatic-Folder-Organizer'"
                :lang="'Python'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-lib-utils'"
                :idAbout="'about-lib-utils'"
                :description="'Utilitários compactados numa biblioteca para auxiliar no desenvolvimento de projetos.'"
                :urlImage="libUtilsImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/Lib-Utils'"
                :lang="'Java'"
            />

            <PortfolioProjectsMinimalComponentsProject
                :idContent="'project-city-info'"
                :idAbout="'about-city-info'"
                :description="'API que fornece um agregado de informações climáticas e notícias de uma cidade.'"
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
                :description="'Um gerenciador de avaliações. Crie e organize questões por setores para seus funcionários.'"
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
                :description="'Gere áudio através de um PDF de forma simples e eficiente utilizando bibliotecas de Python.'"
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
                :description="'Um CLI para auxiliar no desenvolvimento de projetos. Crie ToDos, traduza e converse com I.A. direto do terminal.'"
                :urlImage="toolkitImage"
                :github="true"
                :urlGithub="'https://github.com/georgejrdev/ToolKit-Development'"
                :lang="'Java'"
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
