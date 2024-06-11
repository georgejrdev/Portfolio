function adjustProjectStructure() {
function adjustSection(sectionId) {
    const projectContainer = document.getElementById(sectionId);
    const imageProject = projectContainer.querySelector('.image-project');
    const projectButtons = projectContainer.querySelector('.project-buttons');
    const projectContent = projectContainer.querySelector('.project-content');

    if (window.innerWidth >= 1024) {
        if (!projectContent) {
            const newContentDiv = document.createElement('div');
            newContentDiv.className = 'project-content';

            newContentDiv.appendChild(projectContainer.querySelector('h2'));
            newContentDiv.appendChild(projectContainer.querySelector('.project-description'));
            newContentDiv.appendChild(projectButtons);

            projectContainer.insertBefore(newContentDiv, imageProject);
        }
    } else {
        if (projectContent) {
            projectContainer.insertBefore(projectContainer.querySelector('h2'), imageProject);
            projectContainer.insertBefore(projectContainer.querySelector('.project-description'), imageProject);
            projectContainer.insertBefore(projectButtons, imageProject);

            projectContainer.removeChild(projectContent);
        }
    }
}

adjustSection('desktop-project');
adjustSection('mobile-project');
}

window.addEventListener('load', adjustProjectStructure);
window.addEventListener('resize', adjustProjectStructure);