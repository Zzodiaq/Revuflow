
const navbar = document.querySelector("#navbar");
const navlink = document.querySelector(".nav__link");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        console.log('scroll')
        navbar.setAttribute("class", "navbar scrolled navstyle");
        // navbar.setAttribute("class", "navbar navstyle")
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("navstyle");
    }
});


    const checkbox = document.getElementById("check");
    const modalpricing = document.getElementById("pricing__card-container");
    const modalpricingAnnual = document.getElementById("pricing__card-container-annual");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    function verifierCaseCochée() {
        if (checkbox.checked) {
            modalpricing.style.display = "none"
            modalpricingAnnual.style.display = "grid"
            left.style.backgroundColor= "white"
            left.style.color = "black"
            right.style.backgroundColor = "black"
            right.style.color = "#FFD95A"
        } else {
            modalpricing.style.display = "grid"
            modalpricingAnnual.style.display = "none"
            right.style.backgroundColor = "white"
            right.style.color = "black"
        }
    }

    checkbox.addEventListener("change", () => {
        verifierCaseCochée()
    })