
const navbar = document.querySelector("div.navbar");
const modalSwitch = document.querySelector(".modalSwitch");
const pricingCheckbox = modalSwitch.querySelector("input[type='checkbox']");
const left = modalSwitch.querySelector(".left");
const right = modalSwitch.querySelector(".right");
const cardsButtons = document.querySelectorAll('.pricing__card button');
let interval = document.querySelector('.pricing__card-container').dataset.interval;
// const navlink = document.querySelector(".nav__link");
const stripeData = {
    monthly: {
        standard: {
            url: 'https://buy.stripe.com/7sIg227rFdqR9IQdQR',
            price: '$3',
        },
        premium: {
            url: 'https://buy.stripe.com/00g1784ft4Ul08g003',
            price: '$6',
        },
        custom: {
            url: 'https://checkout.stripe.com/c/pay/cs_live_a1kJqHo78Qpdppp0HiN1fPKIHWrpT26J8ENymi9ZhxpfO8m1829Na6zGcN#fidkdWxOYHwnPyd1blppbHNgWjA0S3FdUldMRGl2MjB0VnxWXDdiNURQMF1obDdzcnZWaHdMZ3dLaGprSTVwQj1WV1VAaUJIPDxudVRQUkcyQD19aUNNc0NINEdIcWNKTD1IT2ZwU0pOb3NjNTVgQjVyXUlJcScpJ3VpbGtuQH11anZgYUxhJz8nPXJIYjc3PXNPNUAwMkRMNz09J3gl',
            price: null,
        },
    },
    yearly: {
        standard: {
            url: 'https://buy.stripe.com/3cs8zAdQ3fyZ5sAbIK',
            price: '$30',
        },
        premium: {
            url: 'https://buy.stripe.com/cN28zA9zN4Ul3ks7sw',
            price: '$60',
        },
        custom: {
            url: 'https://checkout.stripe.com/c/pay/cs_live_a1kJqHo78Qpdppp0HiN1fPKIHWrpT26J8ENymi9ZhxpfO8m1829Na6zGcN#fidkdWxOYHwnPyd1blppbHNgWjA0S3FdUldMRGl2MjB0VnxWXDdiNURQMF1obDdzcnZWaHdMZ3dLaGprSTVwQj1WV1VAaUJIPDxudVRQUkcyQD19aUNNc0NINEdIcWNKTD1IT2ZwU0pOb3NjNTVgQjVyXUlJcScpJ3VpbGtuQH11anZgYUxhJz8nPXJIYjc3PXNPNUAwMkRMNz09J3gl',
            price: null,
        },
    },
};

function handlePricingCheckbox() {
    // initialize variables
    let intervalText = "";
    let buttonBackgroundColor = "";
    // check which side is active
    if ("monthly" === interval) {
        // update variables values
        intervalText = "year";
        interval = "yearly";
        buttonBackgroundColor = "black";
        // update checkbox style
        left.style.backgroundColor= "white";
        left.style.color = "black";
        right.style.backgroundColor = "black";
        right.style.color = "#FFD95A";
    } else {
        // update variables values
        intervalText = "month";
        interval = "monthly";
        buttonBackgroundColor = "#82A0D8";
        // update checkbox style
        left.style.backgroundColor= "#82A0D8";
        left.style.color = "white";
        right.style.backgroundColor = "white";
        right.style.color = "black";
    }
    // loop through buttons
    cardsButtons.forEach((button) => {
        // get the button's card
        const pricingCard = button.parentElement.parentElement;
        // change the button's background color
        button.style.backgroundColor = buttonBackgroundColor;
        // get the link element
        const link = button.parentElement;
        // get the matching link from the stripeData object
        link.href = stripeData[interval][link.parentElement.dataset.plan].url;
        // get the plan price from stripeData object
        const price = stripeData[interval][link.parentElement.dataset.plan].price;
        // set card's price and interval
        if (price) {
            pricingCard.querySelector('h2.plan-price').textContent = price;
            pricingCard.querySelector(".interval-text").innerHTML = `per<br>${intervalText}`;
        }
    });
}

const navLinks = document.querySelectorAll('a.nav-link');
window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.setAttribute("class", "navbar scrolled navstyle");
        // navbar.setAttribute("class", "navbar navstyle")
        navLinks.forEach((navlink) => navlink.style.color = "#EF9595");
    } else {
        navbar.classList.remove("scrolled");
        navbar.classList.remove("navstyle");
        navLinks.forEach((navlink) => navlink.style.color = "#7E7E7E");
    }

    const animatedDivs = document.querySelectorAll('.animated');
    animatedDivs.forEach((animatedDiv) => {
        const rect = animatedDiv.getBoundingClientRect();

        if(rect.top <= window.innerHeight && rect.bottom >= 0) {
            animatedDiv.style.opacity = '1';
        }
    })
});

pricingCheckbox.addEventListener("change", () => {
    handlePricingCheckbox();
})