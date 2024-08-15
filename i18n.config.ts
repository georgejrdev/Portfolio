export default defineI18nConfig(() => ({
    legacy: false,
    locale: "pt",
    messages: {
        en: {
            nav: {
                seeArticles: "see articles",
                seePortfolio: "see portfolio",
                projects: "projects",
                about: "about me",
                contact: "contact",
            },
            footer: {
                message: "made with",
                rights: "All rights reserved",
            },
            portfolio: {
                title: {
                    before: "my name is George Júnior,",
                },
                skills: "Skills",
                management: {
                    manager: "MANAGEMENT",
                    team: "TEAM",
                    agile: "AGILE",
                    leader: "LEADER",
                },
                bestProject: {
                    desktopDescription: "Manage and control your Feature Flags with ease and efficiency. Our solution allows for the creation, updating, and real-time monitoring of all features in your project. Simplify the activation and deactivation of resources, enabling continuous and safe deployment. Optimize the end-user experience by reducing risks and increasing development agility.",
                    mobileDescription: "Post Its is the perfect app for quickly capturing ideas and reminders. With an intuitive interface, it allows you to easily create, organize, and customize notes. Use colors, add alarms, and sync across devices. Perfect for daily tasks, ideas, and reminders.",
                },
                otherProjects: {
                    mouseHover: "hover over the projects",
                    descriptions: {
                        path: "A website designed to guide beginners in the IT field, showing a path to follow with reference material.",
                        burger: "Creation of a modern website for a burger joint, highlighting the menu, history, and contact information.",
                        mario: "A new way to play Super Mario: use real-life movements with a camera to play.",
                        gamesOnline: "A website that aggregates browser games, with an individual scoring system for each game.",
                        folders: "A tool to organize files, making it easier to search and categorize them.",
                        libUtils: "Utilities compacted into a library to assist in project development.",
                        infoCity: "API that provides aggregated weather information and news for a city.",
                        ratingSystem: "A ratings manager. Create and organize questions by department for your employees.",
                        audiobook: "Generate audio from a PDF easily and efficiently using Python libraries.",
                        toolKit: "A CLI to assist in project development. Create ToDos, translate, and chat with AI directly from the terminal.",
                    },
                },
                aboutMe: {
                    title: "About me",
                    description: "I am a fullstack developer with nearly 4 years of experience, passionate about constantly learning and evolving. I love management and leadership challenges, combining my passion for technology with the ability to inspire and coordinate teams.",
                    education: "Education",
                    educations: {
                        schoolOne: "Bachelor's in Systems Analysis and Development",
                        schoolTwo: "Technical Degree in Systems Development",
                    },
                },
                contact: {
                    title: "Contact",
                    message: "Let's work together?",
                },
            },

            blog: {
                title: {
                    before: "I am George Júnior and these are the best",
                    emphasis: "Articles",
                    after: "I have written",
                },
            },
        },

        pt: {
            nav: {
                seeArticles: "ver artigos",
                seePortfolio: "ver portfolio",
                projects: "projetos",
                about: "sobre mim",
                contact: "contato",
            },
            footer: {
                message: "feito com",
                rights: "Todos os direitos reservados"
            },
            portfolio: {
                title: {
                    before: "meu nome é George Júnior,",
                },
                skills: "Habilidades",
                management: {
                    manager: "GESTÃO",
                    team: "EQUIPE",
                    agile: "AGIL",
                    leader: "LIDER",
                },

                bestProject: {
                    desktopDescription: "Gerencie e controle suas Features Flags com facilidade e eficiência. Nossa solução permite a criação, atualização e monitoramento em tempo real de todas as funcionalidades do seu projeto. Simplifique a ativação e desativação de recursos, permitindo uma implementação contínua e segura. Otimize a experiência do usuário final, reduzindo riscos e aumentando a agilidade no desenvolvimento.",
                    mobileDescription: "O Post Its é o app ideal para capturar ideias e lembretes rapidamente. Com interface intuitiva, permite criar, organizar e personalizar notas facilmente. Use cores, adicione alarmes e sincronize entre dispositivos. Perfeito para tarefas, ideias e lembretes diários.",
                },
                otherProjects: {
                    mouseHover: "passe o mouse nos projetos",
                    descriptions: {
                        path: "Um site feito para guiar iniciantes na área de TI, mostrando um caminho à seguir com material de referência.",
                        burger: "Criação de um site moderno para uma hamburgueria, destacando o menu, a história e as informações de contato.",
                        mario: "Uma nova forma de jogar Super Mario: utilize movimentos reais usando uma câmera para jogar.",
                        gamesOnline: "Um site que agrega jogos de navegador, com sistema de pontuação individual para cada jogo.",
                        folders: "Ferramenta para organizar arquivos, facilitando a busca e a classificação dos arquivos.",
                        libUtils: "Utilitários compactados numa biblioteca para auxiliar no desenvolvimento de projetos.",
                        infoCity: "API que fornece um agregado de informações climáticas e notícias de uma cidade.",
                        ratingSystem: "Um gerenciador de avaliações. Crie e organize questões por setores para seus funcionários.",
                        audiobook: "Gere áudio através de um PDF de forma simples e eficiente utilizando bibliotecas de Python.",
                        toolKit: "Um CLI para auxiliar no desenvolvimento de projetos. Crie ToDos, traduza e converse com I.A. direto do terminal.",
                    },
                },
                aboutMe: {
                    title: "Sobre mim",
                    description: "Sou um programador fullstack com quase 4 anos de experiência, apaixonado por aprender e evoluir constantemente. Adoro desafios de gestão e liderança, unindo minha paixão pela tecnologia à habilidade de inspirar e coordenar equipes.",
                    education: "Formações",
                    educations: {
                        schoolOne: "Superior em Análise e Desenvolvimento de Sistemas",
                        schoolTwo: "Técnico em Desenvolvimento de Sistemas",
                    },
                },
                contact: {
                    title: "Contato",
                    message: "Vamos trabalhar juntos?",
                },
            },

            blog: {
                title: {
                    before: "Eu sou George Júnior e estes são os melhores",
                    emphasis: "Artigos",
                    after: "que eu escrevi",
                },
            },
        }
    }
}))