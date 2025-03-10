function createProjectCard(image, name, technologies, repo, link) {
    const container = document.getElementById("slide-content")

    const card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("content")

    const projectImage = document.createElement("div")
    projectImage.classList.add("project-image")
    projectImage.style.backgroundImage = `url(${image})`

    card.appendChild(projectImage)


    const projectInfo = document.createElement("div")
    projectInfo.classList.add("project-info")

    const projectName = document.createElement("h3")
    projectName.className = "project-name"
    projectName.innerHTML = name
    projectInfo.appendChild(projectName)

    const projectDescription = document.createElement("p")
    projectDescription.className = "project-description"
    projectDescription.id = "project-description-" + name.replace(/\s+/g, "")
    projectInfo.appendChild(projectDescription)

    const projectTechnologies = document.createElement("div")
    projectTechnologies.classList.add("project-technologies")

    for (let i = 0; i < technologies.length; i++) {
        const technology = document.createElement("div")
        technology.classList.add("technology")
        technology.classList.add(technologies[i].replace(/\s+/g, ""))
        const technologyText = document.createElement("p")
        technologyText.innerHTML = technologies[i]
        technology.appendChild(technologyText)
        projectTechnologies.appendChild(technology)
    }

    projectInfo.appendChild(projectTechnologies)

    const projectLinks = document.createElement("div")
    projectLinks.classList.add("project-links")

    if (repo !== "" && repo !== null && repo !== undefined) {
        const repoLink = document.createElement("a")
        repoLink.className = "repo-link"
        repoLink.rel = "noopener noreferrer"
        repoLink.target = "_blank"
        repoLink.href = repo
        projectLinks.appendChild(repoLink)
    }

    if (link !== "" && link !== null && link !== undefined) {
        const linkButton = document.createElement("a")
        linkButton.className = "visit-link"
        linkButton.rel = "noopener noreferrer"
        linkButton.target = "_blank"
        linkButton.href = link
        projectLinks.appendChild(linkButton)
    }

    if ((repo !== "" && repo !== null && repo !== undefined) || (link !== "" && link !== null && link !== undefined)) {
        projectInfo.appendChild(projectLinks)
    }

    if (name === "Focus") {
        projectImage.style.backgroundPosition = "center"
        projectDescription.style.width = "80%"
    }

    card.appendChild(projectInfo)
    container.appendChild(card)
}

const projects = 
    [
        {
            "image": "./assets/img/projects/StudyPlanner.png",
            "name": "Study Planner",
            "technologies": ["ELECTRON"],
            "repo": "https://github.com/georgejrdev/Study-Planner",
            "link": "https://github.com/georgejrdev/Study-Planner/releases"
        },
        {
            "image": "./assets/img/projects/STK.png",
            "name": "Super ToolKit",
            "technologies": ["JAVA"],
            "repo": "https://github.com/georgejrdev/Super-ToolKit",
            "link": "https://github.com/georgejrdev/Super-ToolKit"
        },
        {
            "image": "./assets/img/projects/Vocabulary.png",
            "name": "Vocabulary",
            "technologies": ["ANGULAR"],
            "repo": "",
            "link": "https://plus-vocabulary.vercel.app/"
        },
        {
            "image": "./assets/img/projects/AudioBookGenerator.png",
            "name": "Audiobook Generator",
            "technologies": ["JAVASCRIPT", "PYTHON"],
            "repo": "https://github.com/georgejrdev/AudioBook-Generator",
            "link": "https://audiobook-generator-chi.vercel.app/"
        },
        {
            "image": "./assets/img/projects/Focus.png",
            "name": "Focus",
            "technologies": ["REACT NATIVE"],
            "repo": "",
            "link": "https://play.google.com/store/apps/details?id=com.georgejrdev.Focus&pli=1"
        },
        {
            "image": "./assets/img/projects/Path.png",
            "name": "Path",
            "technologies": ["VUEJS"],
            "repo": "https://github.com/georgejrdev/Path",
            "link": "https://dev-path-io.vercel.app/"
        },
        {
            "image": "./assets/img/projects/MarioMoCap.png",
            "name": "Mario MoCap",
            "technologies": ["PYTHON"],
            "repo": "https://github.com/georgejrdev/Mario-Mocap-Control",
            "link": "https://github.com/georgejrdev/Mario-Mocap-Control"
        }
    ]

projects.forEach(project => {
    createProjectCard(project.image, project.name, project.technologies, project.repo, project.link)
})