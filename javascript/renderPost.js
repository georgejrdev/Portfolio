import { posts } from "../data/posts.js";
const language = (localStorage.getItem("lang") === null || localStorage.getItem("lang") === undefined) ? "en" : localStorage.getItem("lang")
const id = new URLSearchParams(window.location.search).get("id")

if (posts[id] == null || posts[id] == undefined) {
    window.location.href = "./blog.html"
}

const title = posts[id][language]["title"]
const content = posts[id][language]["content"]
const references = posts[id]["references"]

document.getElementById("title").innerText = title
document.getElementById("content").innerHTML = content

for (let i = 0; i < references.length; i++) {
    const reference = document.createElement("a")
    reference.href = references[i]["url"]
    reference.innerText = references[i]["name"]
    reference.target = "_blank"
    reference.rel = "noopener noreferrer"
    document.getElementById("references").appendChild(reference)
}

if (references.length === 0) {
    const noReferences = document.createElement("p")
    
    let text 

    if (language === "en") {
        text = "No references."
    } else {
        text = "Sem referências."
    }

    noReferences.innerText = text
    document.getElementById("references").appendChild(noReferences)
}