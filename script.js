let searchButton = document.querySelector("#search");

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", () => {
  console.log("button pressed");
  sendApiRequest();
});

//An asynchronous function to fetch data from the API.
async function sendApiRequest() {
  let response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  useApiData(data);
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data) {
  document.querySelector("#content").innerHTML = `
    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[0].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[0].strDrink}</h5>
    <p class="card-text">${data.drinks[0].strInstructions}</p>
    <a href="https://www.thekitchn.com/the-9bottle-bar-recipe-the-turf-cocktail-drink-recipes-from-the-kitchn-212237" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>

    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[3].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[3].strDrink}</h5>
    <p class="card-text">${data.drinks[3].strInstructions}</p>
    <a href="https://www.gastronomblog.com/the-clove-and-cider-a-bourbon-cocktail-with-drizly/" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>

    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[4].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[4].strDrink}</h5>
    <p class="card-text">${data.drinks[4].strInstructions}</p>
    <a href="https://www.foodnetwork.com/recipes/poppy-cocktail-recipe-1955781" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>
      
  
    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[15].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[15].strDrink}</h5>
    <p class="card-text">${data.drinks[15].strInstructions}</p>
    <a href="https://www.liquor.com/recipes/martinez/" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>

    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[18].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[18].strDrink}</h5>
    <p class="card-text">${data.drinks[18].strInstructions}</p>
    <a href="https://www.inspiredtaste.net/19492/sloe-gin-fizz-recipe/" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>

    <div class="card" style="width: 18rem;">
  <img src="${data.drinks[20].strDrinkThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.drinks[20].strDrink}</h5>
    <p class="card-text">${data.drinks[20].strInstructions}</p>
    <a href="https://www.thespruceeats.com/imperial-martini-recipe-759310" class="btn btn-primary">Go Cocktail Recipe</a>
  </div>
    </div>
`}
