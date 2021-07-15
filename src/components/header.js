class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
        <div class="header header-fluid">
            <div class="container text">
                <h3 class="lead">RestaurantQ adalah sebuah restaurant yang menyediakan berbagai makanan.</h3>
            </div>
        </div>
        `;
    }
}
customElements.define("header-fluid", Header);