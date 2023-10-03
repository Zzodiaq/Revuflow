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
            <a href="https://www.revuflow.net#offerings">Offerings</a>
            <a href="https://www.revuflow.net#the-product">The product</a>
            <a href="https://www.revuflow.net#pricing">Pricing</a>
            <a href="https://www.revuflow.net#contact-us">Contact Us</a>
          </div>
          <div class="side-menu-block">
            <h1 class="side-menu-header">Site plan</h1>
            <a href="#">FAQ</a>
            <a href="#">Terms of use</a>
            <a href="#">Legal information</a>
          </div>
        </div>
        `;
        shadowRoot.appendChild(container);
    }
}

customElements.define('revuflow-side-menu', RevuflowSideMenu);
