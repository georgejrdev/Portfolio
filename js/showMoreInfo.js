function showMoreInfo(event, idDiv) {
    let elementMoreInfo = document.getElementById(idDiv);
    let element = event.currentTarget.querySelector("p");

    element.style.display = "none";
    elementMoreInfo.style.display = "block";
}

function hideMoreInfo(event, idDiv) {
    let elementMoreInfo = document.getElementById(idDiv);
    let element = event.currentTarget.querySelector("p");

    elementMoreInfo.style.display = "none";
    element.style.display = "block";
}