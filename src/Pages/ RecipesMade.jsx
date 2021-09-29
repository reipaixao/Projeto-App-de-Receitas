import React, { useState } from 'react';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import '../CSS/recipesMade.css';

// a função abaixo serve para emular receitas favoritas salvas no localStorage
// const local = () => localStorage.setItem('doneRecipes', JSON.stringify([
//   {
//     id: '52771',
//     type: 'comida',
//     area: 'Italian',
//     category: 'Vegetarian',
//     alcoholicOrNot: '',
//     name: 'Spicy Arrabiata Penne',
//     image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
//     doneDate: '23/06/2020',
//     tags: ['Pasta', 'Curry'],
//   },
//   {
//     id: '178319',
//     type: 'bebida',
//     area: '',
//     category: 'Cocktail',
//     alcoholicOrNot:  'Alcoholic',
//     name: 'Aquamarine',
//     image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
//     doneDate: '23/06/2020',
//     tags: [],
//   },
// ]));

function RecipesMade() {
  // local(); esta linha chama a função para salvar as receitas no localStorage, necessária apenas uma vez
  const [text, setText] = useState(false);
  const [filter, setFilter] = useState('All');
  const storageDoneRecipes = localStorage.getItem('doneRecipes');
  const doneRecipes = JSON.parse(storageDoneRecipes);

  const filterRecipes = (item) => {
    if (filter === 'All') return item;
    if (filter === item.type) return item;
  };

  const recipeCard = (recipe, index) => {
    const {
      id,
      name,
      type,
      area,
      image,
      category,
      alcoholicOrNot,
      doneDate,
      tags } = recipe;

    const topText = (type === 'comida')
      ? `${area} - ${category}`
      : `${category} - ${alcoholicOrNot}`;
    return (
      <div key={ index }>
        { (text) && (<h3>Link copiado!</h3>) }
        <button
          onClick={ () => {
            copy(`http://localhost:3000/${type}s/${id}`);
            setText(true);
          } }
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>

        <Link to={ `/${type}s/${id}` }>
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-horizontal-image` }
            style={ { maxWidth: '100%' } }
          />
        </Link>

        <p data-testid={ `${index}-horizontal-top-text` }>{topText}</p>

        <Link to={ `/${type}s/${id}` }>
          <p data-testid={ `${index}-horizontal-name` }>{name}</p>
        </Link>

        <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
        { tags.map((tag, i) => (
          <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>
        )) }
      </div>
    );
  };

  return (
    <div>
      <Header title="Receitas Feitas" withSearchButton={ false } />
      <section className="made__filter__buttons">
        <button
          onClick={ () => setFilter('All') }
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          onClick={ () => setFilter('comida') }
          type="button"
          data-testid="filter-by-food-btn"
        >
          Food
        </button>
        <button
          onClick={ () => setFilter('bebida') }
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
      </section>
      <section>
        { doneRecipes && doneRecipes
          .filter((item) => filterRecipes(item))
          .map((recipe, index) => (recipeCard(recipe, index)))}
      </section>
    </div>
  );
}

export default RecipesMade;
