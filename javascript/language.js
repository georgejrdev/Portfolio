function changeLanguage(lang) {
    if (lang == "pt") {
        localStorage.setItem("lang", "pt")
    } else {
        localStorage.setItem("lang", "en")
    }

    location.reload()
}


const en = {
    "title": {
        "emphasis":"GEORGE JR.",
        "line1": "FULLSTACK",
        "line2": "DEVELOPER"
    },
    "nav": {
        "blog": "BLOG",
        "projects": "PROJECTS",
        "contact": "CONTACT",
        "github": "GITHUB",
        "linkedin": "LINKEDIN"
    },
    "projects": {
        "swipeText": "CLICK ON THE ARROWS TO SEE MORE PROJECTS",
        "description": {
            "StudyPlanner": "The Study Planner is an innovative platform designed to help students efficiently manage their academic activities. With an intuitive interface and comprehensive features, the system allows detailed tracking of attendance, grades, notes, and tasks, making it easier to stay organized and monitor academic performance.",
            "SuperToolKit": "Super ToolKit is a comprehensive command-line utility designed to enhance productivity and streamline everyday tasks directly from the terminal. It provides essential tools for developers, system administrators, and power users, simplifying workflows and boosting efficiency.",
            "Vocabulary": "Vocabulary is a platform designed to help users expand their English vocabulary through an interactive, gamified experience. It makes learning new words fun, engaging, and effective, providing a seamless way to improve your vocabulary.",
            "AudiobookGenerator": "The Audiobook Generator is an online tool built with Python that converts PDFs into audiobooks. Using text-to-speech technology, it processes and reads out the content of any uploaded PDF file, providing an efficient way to consume written content hands-free.",
            "Focus": "Focus is a productivity app based on the Pomodoro technique, designed to help users manage their time effectively. It allows you to break tasks into focused intervals, with breaks in between, helping you stay on track and boost your productivity.",
            "Path": "Path is an online platform offering a structured learning roadmap for programming. It provides step-by-step guides for mastering various languages and frameworks, along with progress tracking and resource recommendations to help users stay organized and motivated.",
            "MarioMoCap": "Mario MoCap is a motion capture project developed for a Science Fair demonstration. Using MediaPipe and OpenCV, the system tracks hand and body movements to control in-game actions. It provides an interactive gaming experience by showcasing the power of computer vision and motion capture technology."
        },
        "sourceCode": "SOURCE CODE",
        "visit": "VISIT"
    },
    "contact": {
        "message": {
            "emphasis": "IT’S ALREADY BEEN",
            "line1": "OVER 4 YEARS",
            "line2": "DOING THIS"
        },
        "email": {
            "emphasis": "CONTACT:",
            "text": "CTT.GEORGEJR@GMAIL.COM"
        }
    }
}

const pt = { 
    "title": {
        "emphasis":"GEORGE JR.",
        "line1": "PROGRAMADOR",
        "line2": "FULLSTACK"
    },
    "nav": {
        "blog": "BLOG",
        "projects": "PROJETOS",
        "contact": "CONTATO",
        "github": "GITHUB",
        "linkedin": "LINKEDIN"
    },
    "projects": {
        "swipeText": "CLIQUE NAS SETAS PARA VER MAIS PROJETOS",
        "description": {
            "StudyPlanner": "O Study Planner é uma plataforma inovadora projetada para ajudar estudantes a gerenciar suas atividades acadêmicas com eficiência. Com uma interface intuitiva e recursos abrangentes, o sistema permite o acompanhamento detalhado de presenças, notas, anotações e tarefas, tornando mais fácil se organizar e monitorar o desempenho acadêmico.",
            "SuperToolKit": "O Super ToolKit é uma ferramenta de linha de comando abrangente projetada para aumentar a produtividade e simplificar tarefas diárias diretamente do terminal. Ele fornece ferramentas essenciais para desenvolvedores, administradores de sistemas e usuários avançados, otimizando fluxos de trabalho e aumentando a eficiência.",
            "Vocabulary": "O Vocabulary é uma plataforma projetada para ajudar os usuários a expandirem seu vocabulário em inglês por meio de uma experiência interativa e gamificada. Ele torna o aprendizado de novas palavras divertido, envolvente e eficaz, proporcionando uma maneira fluida de melhorar o vocabulário.",
            "AudiobookGenerator": "O Audiobook Generator é uma ferramenta online desenvolvida em Python que converte PDFs em audiolivros. Utilizando tecnologia de conversão de texto em fala, ele processa e lê o conteúdo de qualquer arquivo PDF enviado, proporcionando uma maneira eficiente de consumir textos sem precisar lê-los.",
            "Focus": "O Focus é um aplicativo de produtividade baseado na técnica Pomodoro, projetado para ajudar os usuários a gerenciar seu tempo de forma eficaz. Ele permite dividir tarefas em intervalos focados, com pausas entre eles, ajudando você a manter o foco e aumentar sua produtividade.",
            "Path": "O Path é uma plataforma online que oferece um roteiro estruturado para aprendizado de programação. Ele fornece guias passo a passo para dominar diversas linguagens e frameworks, além de acompanhamento de progresso e recomendações de recursos para ajudar os usuários a se manterem organizados e motivados.",
            "MarioMoCap": "O Mario MoCap é um projeto de captura de movimento desenvolvido para uma demonstração em feira de ciências. Usando MediaPipe e OpenCV, o sistema rastreia movimentos das mãos e do corpo para controlar ações no jogo. Ele proporciona uma experiência interativa ao demonstrar o poder da visão computacional e da tecnologia de captura de movimento."
        },
        "sourceCode": "CÓDIGO FONTE",
        "visit": "VISITAR"
    },
    "contact": {
        "message": {
            "emphasis": "JÁ SÃO",
            "line1": "MAIS DE 4 ANOS",
            "line2": "FAZENDO ISSO"
        },
        "email": {
            "emphasis": "CONTATO:",
            "text": "CTT.GEORGEJR@GMAIL.COM"
        }
    }
}

let language

if (localStorage.getItem("lang") == "pt") {
    language = pt
} else {
    language = en
}

document.getElementById("header-h1-emphasis").innerText = language.title.emphasis
document.getElementById("header-h1-line1").innerText = language.title.line1
document.getElementById("header-h1-line2").innerText = language.title.line2

document.getElementById("link-blog").innerText = language.nav.blog
document.getElementById("link-projects").innerText = language.nav.projects
document.getElementById("link-contact").innerText = language.nav.contact
document.getElementById("link-github").innerText = language.nav.github
document.getElementById("link-linkedin").innerText = language.nav.linkedin

document.getElementById("swipe-text").innerText = language.projects.swipeText

const projectsIds = ["StudyPlanner", "SuperToolKit", "Vocabulary", "AudiobookGenerator", "Focus", "Path", "MarioMoCap"]

projectsIds.forEach((id) => {
    const description = document.getElementById(`project-description-${id}`)
    description.innerText = language.projects.description[id]
})

const sourceCodes = document.getElementsByClassName("repo-link")
for (let i = 0; i < sourceCodes.length; i++) {
    sourceCodes[i].innerHTML = language.projects.sourceCode
}

const links = document.getElementsByClassName("visit-link")
for (let i = 0; i < links.length; i++) {
    links[i].innerHTML = language.projects.visit
}

document.getElementById("contact-h2-emphasis").innerText = language.contact.message.emphasis
document.getElementById("contact-h2-line1").innerText = language.contact.message.line1
document.getElementById("contact-h2-line2").innerText = language.contact.message.line2
document.getElementById("contact-email-emphasis").innerText = language.contact.email.emphasis
document.getElementById("contact-email").innerText = language.contact.email.text