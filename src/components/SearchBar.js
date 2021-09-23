import React, { useState } from 'react';

function SearchBar() {
  const [inputvalue, setInputvalue] = useState('');

  const handleChangeInput = (event) => {
    setInputvalue(event.target.value);
  };

  const getFoodApi = async () => {
    const apiByName = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`;
    const result = await fetch(apiByName).then((response) => response.json());
    return result;
  };

  const handleClick = () => {
    getFoodApi();
  };

  return (
    <div>
      <input data-testid="search-input" onChange={ handleChangeInput } value={ inputvalue } />

      <input
        type="radio"
        name="search"
        value="ingrediente"
        data-testid="ingredient-search-radio"
      />
      Ingrediente
      <br />
      <input
        type="radio"
        name="search"
        value="nome"
        data-testid="name-search-radio"
      />
      Nome
      <br />
      <input
        type="radio"
        name="search"
        value="primeira-letra"
        data-testid="first-letter-search-radio"
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
