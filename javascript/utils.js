function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener("scroll", () => {
    const header = document.getElementById("header")

    if (isVisibleInViewport(header)) {
        document.getElementById("back-to-top").style.display = "none"
    } else {
        document.getElementById("back-to-top").style.display = "flex"
    }
})

function isVisibleInViewport(elem)
{
    let y = elem.offsetTop;
    let height = elem.offsetHeight;

    while ( elem = elem.offsetParent )
        y += elem.offsetTop;

    let maxHeight = y + height;
    let isVisible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
    return isVisible; 

}