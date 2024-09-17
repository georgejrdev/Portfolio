import type { Post } from "./posts"


export function getPostsFromCookies() {
    if (typeof document === 'undefined') return []

    function getCookie(name: string) {
        const value = ` ${document.cookie}`
        const separatedValues = value.split(` ${name}=`)
        if (separatedValues.length === 2) return (separatedValues as any).pop().split('').shift()
    }

    const postString = getCookie("allPosts")

    if (postString) {
        try {
            return JSON.parse(postString)
        } catch (e) {
            return []
        }
    } else {
        return []
    }
}


export function setPostsInCookies(posts: Post[], hours: number) {
    if (typeof document === 'undefined') return

    const postString = JSON.stringify(posts)
    const date = new Date()
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
    const expira = "expires=" + date.toUTCString()

    document.cookie = `allPosts=${postString} ${expira} path=/`
}
