<template>
    <PortfolioHeader />
    
    <main>
        <PortfolioSkills />

        <PortfolioBestProject 
            :idSection="'desktop-project'" 
            :title="'Feature Control'" 
            :urlImage="laptopImage" 
            :description="$t('portfolio.bestProject.desktopDescription')" 
            :urlGithub="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :urlDeploy="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :direction="'row'"
        />
        
        <PortfolioBestProject 
            :idSection="'mobile-project'" 
            :title="'Post Its'" 
            :urlImage="cellphoneImage"
            :description="$t('portfolio.bestProject.mobileDescription')" 
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
import laptopImage from "~/assets/images/laptop.png"
import cellphoneImage from "~/assets/images/cellphone.png"

useHead({
    title: "Portfolio - George Júnior"
})

const { locale, setLocale } = useI18n()

onMounted(() => {
    let language = localStorage.getItem("language")

    if (!language){
        language = "pt"
        localStorage.setItem("language", language)
    }
    
    setLocale(language)
})

</script>


<style scoped>

</style>