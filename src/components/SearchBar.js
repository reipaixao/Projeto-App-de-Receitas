import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';
import Context from '../context/Context';

const INGREDIENT = 'ingrediente';
const NAME = 'nome';
const FIRST_LETTER = 'primeira-letra';
const MEAL_API_ADDRESS = 'https://www.themealdb.com';
const DRINKS_API_ADDRESS = 'https://www.thecocktaildb.com';

function SearchBar() {
  const history = useHistory();
  const { setMealsValue, setDrinksValue } = useContext(Context);
  const location = useLocation();
  const [inputvalue, setInputvalue] = useState('');
  const [radioButtonValue, setRadioButtonValue] = useState();

  const handleChangeInput = (event) => {
    setInputvalue(event.target.value);
  };

  const handleRadioButton = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const alert = () => global.alert('Sua busca deve conter somente 1 (um) caracter');

  const getFoodOrDrinkFromApi = async () => {
    const apiAddress = location.pathname === '/comidas'
      ? MEAL_API_ADDRESS : DRINKS_API_ADDRESS;

    if (radioButtonValue === INGREDIENT) {
      const apiByName = `${apiAddress}/api/json/v1/1/filter.php?i=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
    if (radioButtonValue === NAME) {
      const apiByName = `${apiAddress}/api/json/v1/1/search.php?s=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
    if (radioButtonValue === FIRST_LETTER) {
      if (inputvalue.length > 1) return alert();
      const apiByName = `${apiAddress}/api/json/v1/1/search.php?f=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
  };

  const handleClick = async () => {
    const result = await getFoodOrDrinkFromApi();

    if (location.pathname === '/comidas') {
      setMealsValue(result.meals);
      if (result.meals && result.meals.length === 1) {
        history.push({
          pathname: `/comidas/${result.meals[0].idMeal}`,
        });
      }
    }

    if (location.pathname === '/bebidas') {
      setDrinksValue(result.drinks);
      if (result.drinks && result.drinks.length === 1) {
        history.push({
          pathname: `/bebidas/${result.drinks[0].idDrink}`,
        });
      }
    }
  };

  return (
    <div>
      <input
        data-testid="search-input"
        onChange={ handleChangeInput }
        value={ inputvalue }
      />

      <input
        type="radio"
        name="search"
        value={ INGREDIENT }
        data-testid="ingredient-search-radio"
        checked={ radioButtonValue === INGREDIENT }
        onChange={ handleRadioButton }
      />
      Ingrediente
      <br />
      <input
        type="radio"
        name="search"
        value={ NAME }
        data-testid="name-search-radio"
        checked={ radioButtonValue === NAME }
        onChange={ handleRadioButton }
      />
      Nome
      <br />
      <input
        type="radio"
        name="search"
        value={ FIRST_LETTER }
        data-testid="first-letter-search-radio"
        checked={ radioButtonValue === FIRST_LETTER }
        onChange={ handleRadioButton }
      />
      Primeira letra
      <br />
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}
export default SearchBar;
