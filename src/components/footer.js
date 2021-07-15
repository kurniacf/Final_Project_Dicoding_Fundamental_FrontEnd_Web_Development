class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .footer {
                margin-top: 260px;
                width: 100%;
                padding: 20px;
                background-color: #AFE260;
                font-family: Poppins, arial, sans-serif;
                color: #3F324C;
                text-align: center;
            } 
        </style>
        <div class="footer">
            <div class="container">
                RestaurantQ - @KurniaCF 2021 
            </div>
        </div>
        `;
    }
}
customElements.define("footer-elemen", Footer);