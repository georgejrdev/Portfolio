<template>
    <section>
        <h2>{{ $t("portfolio.skills") }}</h2>

        <div id="skills-content">
            <PortfolioSkillsMinimalComponentsSkill text="JAVA" backgroundColor="#945DFF" />
            <PortfolioSkillsMinimalComponentsSkill text="SPRING" backgroundColor="#4E7896" />
            <PortfolioSkillsMinimalComponentsSkill text="TS" backgroundColor="#F58219" />
            <PortfolioSkillsMinimalComponentsSkill text="NUXT JS" backgroundColor="#41B883" />
            <PortfolioSkillsMinimalComponentsSkill text="JS" backgroundColor="#5282FF" />
            <PortfolioSkillsMinimalComponentsSkill text="R. NATIVE" backgroundColor="#A54646" />
            <PortfolioSkillsMinimalComponentsSkill text="VUE JS" backgroundColor="#E498FF" />
            <PortfolioSkillsMinimalComponentsSkill text="GIT" backgroundColor="#B06D6D" />
            <PortfolioSkillsMinimalComponentsSkill text="DOCKER" backgroundColor="#FFA451" />
            <PortfolioSkillsMinimalComponentsSkill text="AWS" backgroundColor="#9B76E2" />
            <PortfolioSkillsMinimalComponentsSkill text="AZURE" backgroundColor="#249782" />
            <PortfolioSkillsMinimalComponentsSkill :text="$t('portfolio.management.manager')" backgroundColor="#4D8EB2" />
            <PortfolioSkillsMinimalComponentsSkill :text="$t('portfolio.management.team')" backgroundColor="#FF7397" />
            <PortfolioSkillsMinimalComponentsSkill text="PYTHON" backgroundColor="#6D81A8" />
            <PortfolioSkillsMinimalComponentsSkill text="FLASK" backgroundColor="#FF9F3D" />
            <PortfolioSkillsMinimalComponentsSkill text="PHP" backgroundColor="#5CB15D" />
            <PortfolioSkillsMinimalComponentsSkill text="LARAVEL" backgroundColor="#639FFF" />
            <PortfolioSkillsMinimalComponentsSkill :text="$t('portfolio.management.agile')" backgroundColor="#AA5555" />
            <PortfolioSkillsMinimalComponentsSkill text="MYSQL" backgroundColor="#FFB4FF" />
            <PortfolioSkillsMinimalComponentsSkill text="POSTGRE" backgroundColor="#BF8F8F" />
            <PortfolioSkillsMinimalComponentsSkill text="DESIGN" backgroundColor="#FFB97E" />
            <PortfolioSkillsMinimalComponentsSkill text="SCRUM" backgroundColor="#AB8ED6" />
            <PortfolioSkillsMinimalComponentsSkill :text="$t('portfolio.management.leader')" backgroundColor="#36BFA1" />
            <PortfolioSkillsMinimalComponentsSkill text="TDD" backgroundColor="#4DB8D0" />
            <PortfolioSkillsMinimalComponentsSkill text="REST" backgroundColor="#6EA2C8" />
            <PortfolioSkillsMinimalComponentsSkill text="RPC" backgroundColor="#945DFF" />
            <PortfolioSkillsMinimalComponentsSkill text="GRAPHQL" backgroundColor="#4E7896" />
            <PortfolioSkillsMinimalComponentsSkill text="MVC" backgroundColor="#F58219" />
        </div>
    </section>
</template>


<script lang="ts" setup>

</script>


<style scoped>

    section{
        padding-top: 5vh;
        padding-bottom: 5vh;
    }

    h2{
        color: var(--subtitle);
    }

    #skills-content{
        margin: auto;
        margin-top: 8vh;
        width: 90vw;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        column-gap: 25px;
        row-gap: 25px;
    }

    @media screen and (min-width: 1024px) {
        #skills-content{
            width: 83vw;
        }
    }

</style>