function routePage(page) {
    switch (page) {
        case 'home':
            fetch('/homepage.html')
                .then(response => response.text())
                .then(indexHtml => {
                    document.querySelector('.page-content').innerHTML = indexHtml;
                    const event = new Event('contentLoaded');
                    document.dispatchEvent(event);
                });
            break;
        case 'terms-of-use':
            fetch('/terms_of_use.html')
                .then(response => response.text())
                .then(termsHtml => {
                    document.querySelector('.page-content').innerHTML = termsHtml;
                });
            break;
        case 'faq':
            fetch('/faq.html')
                .then(response => response.text())
                .then(faqHtml => {
                    document.querySelector('.page-content').innerHTML = faqHtml;
                });
            break;
        case 'legal-information':
            fetch('/legal_information.html')
                .then(response => response.text())
                .then(legalInformationHtml => {
                    document.querySelector('.page-content').innerHTML = legalInformationHtml;
                });
            break;
        default:
            fetch('/404.html')
                .then(response => response.text())
                .then(notFoundHtml => {
                    document.querySelector('.page-content').innerHTML = notFoundHtml;
                });
    }
}


window.addEventListener("popstate", (event) => {
    console.log('popstate')
    routePage(event.state ? event.state.page : null);
    window.history.pushState({}, '', '#' + page);
});

function navigate(page) {
    console.log(page)
    var stateObj = {page: page};
    window.history.pushState(stateObj, "", '#' + page);
    routePage(page);
}

window.addEventListener('hashchange', () => {
    const page = window.location.hash ? window.location.hash.slice(1) : 'home';
    routePage(page);
}, false);

window.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash ? window.location.hash.slice(1) : 'home';
    routePage(page);
}, false);