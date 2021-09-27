export async function getMealById(id) {
  const endPoint = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endPoint).then((data) => data.json());
  return response.meals;
}

export async function getDrinkById(id) {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await fetch(endPoint).then((data) => data.json());
  return response.drinks;
}

export async function getDrinks() {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  const response = await fetch(endPoint).then((data) => data.json());
  return response.drinks;
}

export async function getMeals() {
  const endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
  const response = await fetch(endPoint).then((data) => data.json());
  return response.meals;
}

// export const fectMealls = async () => {
//   const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
//   const json = await response.json();
//   setDrinksValue(json.drinks);
// }