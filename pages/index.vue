<template>
    <PortfolioHeader />
    
    <main>
        <PortfolioSkills />
        <PortfolioBestProject :idSection="'desktop-project'" :title="'ToolKit-CLI'" :urlImage="laptopImage" :description="'O ToolKit-dev CLI é essencial para desenvolvedores. Gerencie tarefas com uma lista de afazeres, traduza textos instantaneamente e utilize um chat com I.A. para suporte inteligente. Aumente sua produtividade com esta poderosa ferramenta.'" :urlGithub="'https://github.com/georgejrdev/ToolKit-Development'" :urlDeploy="'https://github.com/georgejrdev/ToolKit-Development'" :direction="'row'"/>
        <PortfolioBestProject :idSection="'mobile-project'" :title="'Post Its'" :urlImage="cellphoneImage" :description="'O Post Its é o app ideal para capturar ideias e lembretes rapidamente. Com interface intuitiva, permite criar, organizar e personalizar notas facilmente. Use cores, adicione alarmes e sincronize entre dispositivos. Perfeito para tarefas, ideias e lembretes diários.'" :urlGithub="'https://github.com/georgejrdev/Post-Its'" :urlDeploy="'https://play.google.com/store/apps/details?id=com.georgejrdev.postits&pcampaignid=web_share'" :direction="'row-reverse'"/>
        <PortfolioProjects />
        <PortfolioAbout />
        <PortfolioContact />
    </main>

    <GlobalItensFooter />
</template>


<script lang="ts" setup>
    import laptopImage from '~/assets/images/laptop.png'
    import cellphoneImage from '~/assets/images/cellphone.png'
</script>


<style scoped>

</style>