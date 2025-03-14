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

function render(filter = null){
    var even = true

    for (let i = posts.length - 1; i >= 0; i--) {

        const linkToPost = document.createElement("a")
        linkToPost.classList.add("post-link")
        linkToPost.href = "./post.html?id=" + i

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

        let tagFilter = false

        for (let j = 0; j < posts[i][language]["tags"].length; j++) {
            const color = tagsColor[language][posts[i][language]["tags"][j]]
            const tag = document.createElement("p")
            tag.classList.add("tag")
            tag.innerText = posts[i][language]["tags"][j]
            tag.style.backgroundColor = (color) ? color : "#74bd51"

            if (filter != null) {
                if (tag.innerText.toLowerCase().includes(filter.toLowerCase())) {
                    tagFilter = true
                }
            }

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

        if ((filter != null && filter.trim() !== "") && (
            !posts[i][language]["title"].toLowerCase().includes(filter.toLowerCase()) &&
            !posts[i][language]["content"].toLowerCase().includes(filter.toLowerCase()) &&
            !tagFilter
        )) {
            continue
        }

        linkToPost.appendChild(post)
        postsContainer.appendChild(linkToPost)
    }
}

function dropAllPosts(){
    while (postsContainer.firstChild) {
        postsContainer.removeChild(postsContainer.firstChild)
    }
}

document.getElementById("search").addEventListener("input", (e) => {
    if (e.target.value.trim() === ""){
        dropAllPosts()
        render()
    } else if (e.target.value != null && e.target.value != undefined) {
        dropAllPosts()
        render(e.target.value)
    }
})

render()