const meal = (search) => {
  const url = `https://themealdb.com/api/json/v1/1/search.php?s=${search}
    `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals))
    .catch((error) => {
      console.log(error);
    });
};

const displayMeal = (meals) => {
  console.log(meals);
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerText = "";
  meals.forEach((meal) => {
    console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("row");
    mealDiv.classList.add("g-0");
    mealDiv.innerHTML = ` 
        <div class="col-md-4">
        <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Details
</button>
        </div>
      </div>
        `;
    mealContainer.appendChild(mealDiv);
  });
};

document.getElementById("search-button").addEventListener("click", function () {
  console.log("btn clicked");
  const search = document.getElementById("search-input");
  const searchValue = search.value;
  meal(searchValue);
});

const mealDetails = async (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayMealDetails = (meal) => {
  document.getElementById("exampleModalLabel").innerText = meal.strMeal;
  const mealBody = document.getElementById("meal-details-body");
  mealBody.innerHTML = `
  <img class="img-fluid" src="${meal.strMealThumb}">
  `;
};

meal("rice");
