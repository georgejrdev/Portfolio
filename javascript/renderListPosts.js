import { posts } from "../data/posts.js";
const language = (localStorage.getItem("lang") === null || localStorage.getItem("lang") === undefined) ? "en" : localStorage.getItem("lang")
const postsContainer = document.getElementById("posts-container")

const tagsColor = {
    en:{
        JAVA:"#f0b54f",
        JAVASCRIPT:"#f0db4f",
        GIT:"#f08a4f",
        BEGINNERS:"#4f92f0",
        PHP:"#aa4ff0",
    },
    pt:{
        JAVA:"#f0b54f",
        JAVASCRIPT:"#f0db4f",
        GIT:"#f08a4f",
        INICIANTES:"#4f92f0",
        PHP:"#aa4ff0",
    }
}

var even = true

for (let i = posts.length - 1; i >= 0; i--) {
    const post = document.createElement("div")
    post.classList.add("post")
    post.classList.add("content")

    const title = document.createElement("h2")
    title.innerText = posts[i][language]["title"]
    title.style.color = posts[i]["titleColor"]
    title.classList.add("post-title")
    post.appendChild(title)

    const tagsContainer = document.createElement("div")
    tagsContainer.classList.add("tags-container")

    for (let j = 0; j < posts[i][language]["tags"].length; j++) {
        const color = tagsColor[language][posts[i][language]["tags"][j]]
        const tag = document.createElement("p")
        tag.classList.add("tag")
        tag.innerText = posts[i][language]["tags"][j]
        tag.style.backgroundColor = (color) ? color : "#74bd51"
        tagsContainer.appendChild(tag)
    }
    post.appendChild(tagsContainer)

    if (even) {
        post.classList.add("post-even")
        even = false
    } else {
        post.classList.add("post-odd")
        even = true
    }

    post.setAttribute(`onclick`, `toPost(${i})`)

    postsContainer.appendChild(post)
}