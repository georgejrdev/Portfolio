<template>

    <section>

        <div id="hard-skills">
            <PortfolioSkillsMinimalComponentsSkill alt="Java" :background="javaSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Spring" :background="springSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="TypeScript" :background="tsSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="React Native" :background="reactNativeSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Angular" :background="angularSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Nuxt Js" :background="nuxtSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="JavaScript" :background="jsSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Vue Js" :background="vueSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Php" :background="phpSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Laravel" :background="laravelSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="React" :background="reactSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Node" :background="nodeSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Python" :background="pythonSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Flask" :background="flaskSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="MySQL" :background="mysqlSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="PostgreSQL" :background="postgreSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="AWS" :background="awsSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Azure" :background="azureSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Sass" :background="sassSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Tailwind" :background="tailwindSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Git" :background="gitSkill" />
            <PortfolioSkillsMinimalComponentsSkill alt="Docker" :background="dockerSkill" />
        </div>

        <div id="soft-skills">
            <div class="columns" id="column-one">
                <ul>
                    <li style="color: var(--leadership)">{{ $t("portfolio.softSkills.leadership") }}</li>
                    <li style="color: var(--teamwork)">{{ $t("portfolio.softSkills.teamWork") }}</li>
                    <li style="color: var(--self-knowledge)">{{ $t("portfolio.softSkills.selfKnowLedge") }}</li>
                    <li style="color: var(--communicative)">{{ $t("portfolio.softSkills.communicative") }}</li>
                </ul>
            </div>

            <div class="columns" id="column-two">
                <ul>
                    <li style="color: var(--agile)">{{ $t("portfolio.softSkills.agile") }}</li>
                    <li style="color: var(--adaptability)">{{ $t("portfolio.softSkills.adaptability") }}</li>
                    <li style="color: var(--problem-solving)">{{ $t("portfolio.softSkills.problemSolving") }}</li>
                    <li style="color: var(--time-management)">{{ $t("portfolio.softSkills.timeManagement") }}</li>
                </ul>
            </div>

            <div class="columns" id="column-three">
                <ul>
                    <li style="color: var(--constant-study)">{{ $t("portfolio.softSkills.constantStudy") }}</li>
                    <li style="color: var(--creativity)">{{ $t("portfolio.softSkills.creativity") }}</li>
                    <li style="color: var(--critical-thinking)">{{ $t("portfolio.softSkills.criticalThinking") }}</li>
                </ul>
            </div>
        </div>
    </section>
    
</template>


<script lang="ts" setup>

    import javaSkill from "~/assets/images/skills/java.webp"
    import springSkill from "~/assets/images/skills/spring.webp"
    import tsSkill from "~/assets/images/skills/ts.webp"
    import reactNativeSkill from "~/assets/images/skills/react-native.webp"
    import angularSkill from "~/assets/images/skills/angular.webp"
    import nuxtSkill from "~/assets/images/skills/nuxt.webp"
    import jsSkill from "~/assets/images/skills/js.webp"
    import vueSkill from "~/assets/images/skills/vue.webp"
    import phpSkill from "~/assets/images/skills/php.webp"
    import laravelSkill from "~/assets/images/skills/laravel.webp"
    import reactSkill from "~/assets/images/skills/react.webp"
    import nodeSkill from "~/assets/images/skills/node.webp"
    import pythonSkill from "~/assets/images/skills/python.webp"
    import flaskSkill from "~/assets/images/skills/flask.webp"
    import mysqlSkill from "~/assets/images/skills/mysql.webp"
    import postgreSkill from "~/assets/images/skills/postgre.webp"
    import awsSkill from "~/assets/images/skills/aws.webp"
    import azureSkill from "~/assets/images/skills/azure.webp"
    import sassSkill from "~/assets/images/skills/sass.webp"
    import tailwindSkill from "~/assets/images/skills/tailwind.webp"
    import gitSkill from "~/assets/images/skills/git.webp"
    import dockerSkill from "~/assets/images/skills/docker.webp"

</script>


<style scoped>

    section{
        padding-top: 5vh;
        padding-bottom: 5vh;
    }

    h2{
        color: var(--subtitle);
    }

    ul{
        list-style-position: inside;
    }

    #hard-skills{
        margin: auto;
        margin-top: 8vh;
        width: 90vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    #soft-skills{
        margin: auto;
        margin-top: 8vh;
        width: 90vw;
        max-width: 90vw;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 25px;
    }

    @media screen and (min-width: 1024px) {
        #hard-skills{
            width: 80vw;
        }

        #soft-skills{
            margin-top: 12vh;
            width: 80vw;
            gap: 100px;
        }
    }

</style>