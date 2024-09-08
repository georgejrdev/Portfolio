<template>

    <PortfolioHeader />
    
    <main>
        <PortfolioSkills />

        <PortfolioBestProject
            :idSection="'desktop-project'"
            :title="'Super ToolKit'"
            :urlImage="superToolKit"
            :description="$t('portfolio.bestProject.superToolKit')"
            :urlGithub="'https://github.com/georgejrdev/ToolKit-Development'"
            :urlDeploy="'https://github.com/georgejrdev/ToolKit-Development'"
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
            :idSection="'mobile-project'" 
            :title="'Post Its'" 
            :urlImage="postIts"
            :description="$t('portfolio.bestProject.postIts')" 
            :urlGithub="'https://github.com/georgejrdev/Post-Its'" 
            :urlDeploy="'https://play.google.com/store/apps/details?id=com.georgejrdev.postits&pcampaignid=web_share'" 
            :direction="'row-reverse'"
        />
        
        <PortfolioProjects />
        
        <PortfolioAbout />
        
        <PortfolioContact />
    </main>

    <Footer />

</template>


<script lang="ts" setup>

    import featureControl from "~/assets/images/projects/feature-control.png"
    import superToolKit from "~/assets/images/projects/super-toolkit.png"
    import postIts from "~/assets/images/projects/post-its.png"

    useHead({
        title: "Portfolio - George Júnior"
    })

    const { setLocale } = useI18n()

    onMounted(() => {
        let language = localStorage.getItem("language")

        if (!language){
            language = "pt"
            localStorage.setItem("language", language)
        }
        
        setLocale(language)
    })

</script>