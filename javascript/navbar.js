function isVisibleInViewport(elem) {
    let y = elem.offsetTop;
    const height = elem.offsetHeight;

    while (elem = elem.offsetParent)
        y += elem.offsetTop;

    const maxHeight = y + height;
    const threshold = height * 0.10;

    const isVisible = (y + threshold < (window.pageYOffset + window.innerHeight)) &&
                      (maxHeight - threshold >= window.pageYOffset);

    return isVisible;
}


function check()
{
    const canvas = document.getElementById("header");
	const nav = document.getElementById("navbar");

    if(isVisibleInViewport(canvas)) {
		nav.classList.remove("nav-move");
	} else {
		nav.classList.add("nav-move");
	}
}

if (document.getElementById("header") !== null) {
	window.addEventListener("scroll", check, false);
	window.addEventListener("click", check, false);
}