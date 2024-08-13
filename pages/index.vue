<template>
    <PortfolioHeader />
    
    <main>
        <PortfolioSkills />

        <PortfolioBestProject 
            :idSection="'desktop-project'" 
            :title="'Feature Control'" 
            :urlImage="laptopImage" 
            :description="'Gerencie e controle suas Features Flags com facilidade e eficiência. Nossa solução permite a criação, atualização e monitoramento em tempo real de todas as funcionalidades do seu projeto. Simplifique a ativação e desativação de recursos, permitindo uma implementação contínua e segura. Otimize a experiência do usuário final, reduzindo riscos e aumentando a agilidade no desenvolvimento.'" 
            :urlGithub="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :urlDeploy="'https://github.com/georgejrdev/Feature-Flag-Controller'" 
            :direction="'row'"
        />
        
        <PortfolioBestProject 
            :idSection="'mobile-project'" 
            :title="'Post Its'" 
            :urlImage="cellphoneImage"
            :description="'O Post Its é o app ideal para capturar ideias e lembretes rapidamente. Com interface intuitiva, permite criar, organizar e personalizar notas facilmente. Use cores, adicione alarmes e sincronize entre dispositivos. Perfeito para tarefas, ideias e lembretes diários.'" 
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

</script>


<style scoped>

</style>