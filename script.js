const searchBtn = document.getElementById('button-addon2');
const searchedRecipe = document.getElementById('searchedRecipe');
const searchBar = document.getElementById('searchBar');
const container = document.getElementById('container');
const recipeBtn = document.getElementById('recipeBtn')
let apiData;

searchBtn.addEventListener('click', searchRecipe)

const removeSearchBar = () => {searchBar.style.display="none";}

function searchRecipe () {
    //remove search bar:
    removeSearchBar();
    //searched recipe value:
    const searchedRecipeValue = searchedRecipe.value;
    console.log(searchedRecipeValue);

    //Define API URL:
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=c64ae399f54f48b49a42f697c4b07e42&cuisine=${searchedRecipeValue}`

    //fetching API data:
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.json()) 
    .then(data => loopData(data))
    //call a loop through each result and places a card with the cuisine in the DOM
       
    }


function loopData(data){

   data.results.forEach(result => {
        console.log(result.id)
        const newRecipeCard = `<div class="card col" style="width: 18rem;">
        <img src="${result.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${result.title}</h5>
          <button class="btn btn-primary" onclick="viewRecipe()" id="recipeBtn">Recipe</button>
        </div>
      </div>`;
        const newDiv = document.createElement('div');
        newDiv.innerHTML = newRecipeCard;
        newDiv.className = "row";
        container.appendChild(newDiv);
   })

}


function viewRecipe(data){
    container.style.display = "none";
}