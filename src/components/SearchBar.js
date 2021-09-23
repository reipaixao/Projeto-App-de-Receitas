import React, { useState } from 'react';

const INGREDIENT = 'ingrediente';
const NAME = 'nome';
const FIRST_LETTER = 'primeira-letra';

function SearchBar() {
  const [inputvalue, setInputvalue] = useState('');
  const [radioButtonValue, setRadioButtonValue] = useState();

  const handleChangeInput = (event) => {
    setInputvalue(event.target.value);
  };

  const handleRadioButton = (event) => {
    setRadioButtonValue(event.target.value);
  };

  const alert = () => global.alert('Sua busca deve conter somente 1 (um) caracter');

  const getApi = async () => {
    if (radioButtonValue === INGREDIENT) {
      const apiByName = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
    if (radioButtonValue === NAME) {
      const apiByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
    if (radioButtonValue === FIRST_LETTER) {
      if (inputvalue.length > 1) return alert();

      const apiByName = `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputvalue}`;
      const result = await fetch(apiByName).then((response) => response.json());
      return result;
    }
  };

  const handleClick = () => {
    getApi();
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
