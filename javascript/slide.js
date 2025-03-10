var id = 0

function change(init, right) {
    const content = document.getElementsByClassName("content")

    if (init) {
        createBar(content.length, 0)
        content[0].style.display = "flex"
        id = 0
        return
    }

    id += right ? 1 : -1
    id = id < 0 ? content.length - 1 : id
    id = id >= content.length ? 0 : id
    
    setAllDisplayNone()

    if (right) {
        content[id].style.left = "100%"
        content[id].style.right = ""
        content[id].style.animation = ""
        content[id].style.animation = "slideLeft 0.5s ease-out forwards" 
    } else {
        content[id].style.left = "" 
        content[id].style.right = "100%" 
        content[id].style.animation = "" 
        content[id].style.animation = "slideRight 0.5s ease-out forwards" 
    }
    
    
    content[id].style.display = "flex"
    createBar(content.length, id)
}

function setAllDisplayNone() {
    const content = document.getElementsByClassName("content")
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none"
    }
}

function createBar(contentLength, current) {
    const bar = document.getElementById("slide-bar")

    while (bar.firstChild) {
        bar.removeChild(bar.firstChild)
    }

    for (let i = 0; i < contentLength; i++) {
        const div = document.createElement("div")
        div.classList.add("slide-bar-item")
        div.id = "slide-bar-item-" + i
        bar.appendChild(div)
    }

    const item = document.getElementById("slide-bar-item-" + current)
    item.classList.add("slide-bar-item-active")
}

change(true, false)