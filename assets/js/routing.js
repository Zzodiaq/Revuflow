function routePage(page, eventToDispatch = null) {
    switch (page) {
        case 'home':
            fetchContent('/homepage.html', eventToDispatch);
            break;
        case 'terms-of-service':
            fetchContent('/terms_of_service.html', 'pageLoaded');
            break;
        case 'faq':
            fetchContent('/faq.html');
            break;
        case 'legal-information':
            fetchContent('/legal_information.html');
            break;
        default:
            fetchContent('/homepage.html', eventToDispatch);
    }
}

function fetchContent(url, eventToDispatch = null) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.querySelector('.page-content').innerHTML = html;
            if (eventToDispatch) {
                const event = new Event(eventToDispatch);
                document.dispatchEvent(event);
            }
        });
}


window.addEventListener("popstate", (event) => {
    routePage(event.state ? event.state.page : null, 'contentLoaded');
});

function navigate(page) {
    var stateObj = {page: page};
    window.history.pushState(stateObj, "", '#' + page);
    routePage(page, 'contentLoaded');
}

window.addEventListener('DOMContentLoaded', () => {
    const page = window.location.hash ? window.location.hash.slice(1) : 'home';
    routePage(page, 'contentLoaded');
}, false);