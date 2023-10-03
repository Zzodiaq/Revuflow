class RevuflowSideMenu extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const styleSheet = document.createElement('link');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('href', 'assets/styles/main.css');
        shadowRoot.appendChild(styleSheet);

        const container = document.createElement('div');
        container.setAttribute("class", "side-menu")
        container.innerHTML = `
        <div class="side-menu-content">
          <div class="side-menu-block">
            <h1 class="side-menu-header">The company</h1>
            <a href="#offerings">Offerings</a>
            <a href="#the-product">The product</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact-us">Contact Us</a>
          </div>
          <div class="side-menu-block">
            <h1 class="side-menu-header">Site plan</h1>
            <button onclick="navigate('faq')">FAQ</button>
            <button onclick="navigate('terms-of-service')">Terms of service</button>
            <button onclick="navigate('legal-information')">Legal information</button>
          </div>
        </div>
        `;
        shadowRoot.appendChild(container);
    }
}

customElements.define('revuflow-side-menu', RevuflowSideMenu);
