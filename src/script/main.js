import CariData from './search.js';
const main = () => {
    const cariMeal = document.querySelector("#cariMeal"); 
    const searchButtonClick = document.querySelector("#searchButton"); 
    const cardImage = document.querySelector("#headImage"); 
    const onButtonSearchClicked = () => { 
        CariData.cariMeals(cariMeal.value)
        .then(renderResult)
    };
    const renderResult = result => {
        cardImage.innerHTML = "";
        result.forEach(meal => { 
            const {strMealThumb, strMeal} = meal;
            const mealElement = document.createElement("div");
            mealElement.setAttribute("class", "meal");

            mealElement.innerHTML = `
                <div class="main-card">
                    <img class="card-img-top" src="${strMealThumb}" alt="meal">
                    <div class="card-body"> 
                        <p class="card-text"> ${strMeal} </p>
                    </div>
                </div>
                `;
            cardImage.appendChild(mealElement);
        })
    };
    searchButtonClick.addEventListener("click", onButtonSearchClicked);
};

export default main;