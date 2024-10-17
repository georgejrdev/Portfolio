<template>
    <PortfolioHeader />

    <PortfolioSkills />

    <main>
        <PortfolioBestProject
            :idSection="'desktop-project'"
            :title="'Super ToolKit'"
            :urlImage="superToolKit"
            :description="$t('portfolio.bestProject.superToolKit')"
            :urlGithub="'https://github.com/georgejrdev/Super-ToolKit'"
            :urlDeploy="'https://github.com/georgejrdev/Super-ToolKit'"
            :direction="'row-reverse'"
        />

        <PortfolioBestProject 
            :idSection="'desktop-project-two'" 
            :title="'Feature Control'" 
            :urlImage="featureControl" 
            :description="$t('portfolio.bestProject.featureControl')" 
            :urlGithub="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :urlDeploy="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :direction="'row'"
        />

        <PortfolioBestProject 
            idSection="mobile-project" 
            title="Focus" 
            :urlImage="focus"
            :description="$t('portfolio.bestProject.focus')" 
            urlGithub="https://github.com/official-tstc/Focus" 
            urlDeploy="https://play.google.com/store/apps/details?id=com.georgejrdev.Focus" 
            direction="row-reverse"
        />

        <PortfolioProjects />    
    </main>

    <PortfolioAbout />

    <PortfolioContact />

    <Footer />
</template>


<script lang="ts" setup>

    import featureControl from "~/assets/images/projects/feature-control.webp"
    import superToolKit from "~/assets/images/projects/super-toolkit.webp"
    import focus from "~/assets/images/projects/focus.webp"

    useHead({
    title: "Portfolio - George Júnior"
    })

    const { setLocale } = useI18n()
    const defaultLanguage = 'pt'

    if (process.client) {
        let language = localStorage.getItem("language") || defaultLanguage
        setLocale(language)
        localStorage.setItem("language", language)
    
    } else {
        setLocale(defaultLanguage)
    }

</script>