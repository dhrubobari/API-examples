document.getElementById('error-message').style.display = 'none';
const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchText.value = ''; // reset
    
    // console.log(searchText) // check
    if (searchText == ''){
        // please write something to display
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}` // api url https: thaka lagbe
    // console.log(url)
    fetch(url) // hardquoted hobena so const url
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    .catch(error => displayError(error)) // error khaile dhorbe
    }
}

const displayError = error => {
    document.getElementById('error-message').style.display = 'block';
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.innerHTML = ''; // ekta food search korar por, arekta korle, ager ta muche jabe.
    if(meals.length == 0){
        // console.log('not available');
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col'); // card er parent div e col take add korlm
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
          </div>
        `
        searchResult.appendChild(div); // html take attached korlam
    })
} 
// summary, search er jonno id nisi, forEach korsi for per food, class add, innerHtml e dynamic vabe card gula set korsi.

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals[0]))
}

const displayMeal = meal => {
    console.log(meal)
    const mealDetails = document.getElementById('meal-details')
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>      
    `
    mealDetails.appendChild(div);
}