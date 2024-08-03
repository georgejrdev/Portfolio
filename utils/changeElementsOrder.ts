export function adjustSection(sectionId:string,direction:string) {
    const projectContainer = document.getElementById(sectionId)
    if (!projectContainer) return

    const imageProject = projectContainer.querySelector(".image-project")
    const projectButtons = projectContainer.querySelector(".project-buttons")
    let projectContent = projectContainer.querySelector(".project-content") as HTMLElement | null
    const heading = projectContainer.querySelector("h2")
    const description = projectContainer.querySelector("p")

    if (!imageProject || !projectButtons || !heading || !description) return

    if (window.innerWidth >= 1024) {
        if (!projectContent) {
            projectContent = document.createElement("div")
            projectContent.className = "project-content";
            (projectContent as HTMLElement).style.width = "35vw";
            (projectContent as HTMLElement).style.maxHeight = "70vh"

            projectContent.appendChild(heading)
            projectContent.appendChild(description)
            projectContent.appendChild(projectButtons)

            projectContainer.insertBefore(projectContent, imageProject)
            projectContainer.style.flexDirection = direction
        }
    } else {
        if (projectContent) {
            projectContainer.insertBefore(heading, imageProject)
            projectContainer.insertBefore(description, imageProject)
            projectContainer.insertBefore(projectButtons, imageProject)

            projectContainer.removeChild(projectContent)
        }
    }
}
