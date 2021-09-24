export async function getMealById(id) {
  const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(endPoint)
    .then((data) => data.json());
  // .then((response) => response.meals[0]);
}

export async function getDrinkById(id) {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  return fetch(endPoint)
    .then((data) => data.json());
  // .then((response) => response.drinks[0]);
}
