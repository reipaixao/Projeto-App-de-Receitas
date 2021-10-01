export const saveOnLocalStorage = (key, value) => (
  localStorage.setItem(key, JSON.stringify(value)));

export const getDataFromLocalStorage = (key, value = []) => (
  JSON.parse(localStorage.getItem(key)) || value);

export const saveNewFavorite = (recipe, type) => {
  const {
    idMeal,
    idDrink,
    strArea,
    strCategory,
    strAlcoholic,
    strMeal,
    strDrink,
    strMealThumb,
    strDrinkThumb,
  } = recipe;

  const newFavRecipe = {
    id: idMeal || idDrink,
    type,
    area: strArea || '',
    category: strCategory || '',
    alcoholicOrNot: strAlcoholic || '',
    name: strMeal || strDrink,
    image: strMealThumb || strDrinkThumb,
  };
  return newFavRecipe;
};
