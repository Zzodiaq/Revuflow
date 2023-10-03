class RevuflowFooter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });

        const styleSheet = document.createElement('link');
        styleSheet.setAttribute('rel', 'stylesheet');
        styleSheet.setAttribute('href', 'assets/styles/main.css');
        shadowRoot.appendChild(styleSheet);

        const container = document.createElement('div');
        container.setAttribute("class", "container footer")
        container.innerHTML = `
        <div class="footer-wrapper">
          <a href="/" class="footer-brand">
            <img src="./assets/images/revufloLogo%20(2).png" alt="revuflow logo">
            <p class="footer-paragraph-holder">Let your reviews do the talking.</p>
          </a>
          <div class="footer-content">
            <div class="footer-block">
              <div class="title-small">Company</div>
              <a href="#offerings" class="footer-link">Offerings</a>
              <a href="#the-product" class="footer-link">The product</a>
              <a href="#pricing" class="footer-link">Pricing</a>
              <a href="#contact-us" class="footer-link">Contact Us</a>
            </div>
            <div class="footer-block">
              <div class="title-small">Site plan</div>
              <button onclick="navigate('faq')" class="footer-link">FAQ</a>
              <button onclick="navigate('terms-of-use')" class="footer-link">Terms of use</button>
              <button onclick="navigate('legal-information')" class="footer-link">Legal information</a>
            </div>
          </div>
        </div>
        `;
        shadowRoot.appendChild(container);
    }
}

customElements.define('revuflow-footer', RevuflowFooter);
