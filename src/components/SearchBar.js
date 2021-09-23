import React from 'react';

function SearchBar() {
  return (
    <div>
      <input data-testid="search-input" />

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
      >
        Buscar
      </button>
    </div>
  );
}
export default SearchBar;
