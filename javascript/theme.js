function changeTheme(theme) {
    if (theme == "light") {
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
    }

    loadTheme()
}

function loadTheme() {
    if (localStorage.getItem("theme") == "light") {
        document.body.classList.add("light")
        document.body.style.transition = "0.5s"
        setTimeout(() => {
            document.body.style.transition = "0s"
        },1000)
    } else {
        document.body.classList.remove("light")
        document.body.style.transition = "0.5s"
        setTimeout(() => {
            document.body.style.transition = "0s"
        },1000)
    }
}

loadTheme()