class RevuflowNavbar extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const styleSheet = document.createElement('link');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('href', 'assets/styles/main.css');
        shadowRoot.appendChild(styleSheet);

        const container = document.createElement('div');
        container.setAttribute("class", "navbar")
        container.innerHTML = `
        <div class="container navbar-container">
          <div class="navbar-holder">
            <div class="navbar-container">
              <a href="https://www.revuflow.net" class="brand nav-brand">
                <img src="assets/images/revufloLogo (2).png" class="brand-image" alt="logo">
              </a>
              <nav class="nav-menu">
                <div class="nav-links-holder">
                  <div class="nav-links-container">
                    <div class="nav-links">
                      <a href="#features" class="nav-link">Features</a>
                      <a href="#product" class="nav-link">Product</a>
                      <a href="#pricing" class="nav-link">Pricing</a>
                      <a href="#contact-us" class="nav-link">Contact Us</a>
                    </div>
                    <div class="nav-button-holder">
                      <a href="#pricing" class="navbar-button">Setup in Webflow now</a>
                    </div>
                  </div>
                </div>
              </nav>
              <button class="nav-button">
                <img src="assets/images/hamburger-icon.png" width="10%" class="nav-icon" alt="hamburger icon">
              </button>
            </div>
          </div>
        </div>
        `;
        shadowRoot.appendChild(container);
    }
}

customElements.define('revuflow-navbar', RevuflowNavbar);
