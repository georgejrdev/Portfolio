<template>
    
    <section id="contact">
        <h2>{{ $t('portfolio.contact.title') }}</h2>
        <h3>{{ $t('portfolio.contact.message') }}</h3>
        <p>ctt.georgejr@gmail.com</p>
    </section>

</template>


<style scoped>

    section{
        padding-top: 30vh;
        height: 70vh;
    }

    h2{
        margin: auto;
        width: 90vw;
        text-align: center;
    }

    h3{
        margin: auto;
        margin-top: 8vh;
        width: 85vw;
        text-align: center;
    }

    p{
        margin-top: 5vh;
        text-align: center;
    }

    @media screen and (min-width: 1024px) {
        section{
            margin: auto;
            width: 83vw;
        }    

        h2,h3,p{
            margin: 0;
            text-align: left;
            width: 100%;
        }

        h3{
            margin-top: 5vh;
        }

        p{
            margin-top: 3vh;
        }
    }

</style>