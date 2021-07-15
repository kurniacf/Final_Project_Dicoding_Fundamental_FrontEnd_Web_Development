class Nav extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }
    get value(){
        return this.querySelector("#searchButton").value;
    }
    render() {
        this.innerHTML = `
        <style>
            .navbar {
                background-color: var(--green);
                font-family: Poppins, Verdana, Tahoma, sans-serif;
                font-size: 40px;
                padding: 16px;
                display: block;
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 1;
            }
        </style>
        <nav class="navbar">
            <div class="container">
                <h2 class="logo">RestaurantQ</h2>
                <form class="form-inline">
                    <input class="form-control mr-sm-4" id="cariMeal" type="search" placeholder="Cari">
                    <button class="btn bg-warning" id="searchButton" type="button">Cari</button>
                </form>
            </div>
        </nav>
        `;

        this.querySelector("#searchButton").addEventListener("click", this._clickEvent);
    }
}

customElements.define("nav-bar", Nav);