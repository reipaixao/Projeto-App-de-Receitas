import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
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

function RecipesMade({ path }) {
  // local(); esta linha chama a função para salvar as receitas no localStorage, necessária apenas uma vez
  const [text, setText] = useState(false);
  const storageDoneRecipes = localStorage.getItem('doneRecipes');
  const doneRecipes = JSON.parse(storageDoneRecipes);

  const recipeCard = (recipe, index) => {
    const { name, image, category, doneDate, tags } = recipe;
    return (
      <div>
        { (text) && (<h3>Link copiado!</h3>) }
        <button
          onClick={ () => {
            copy(`http://localhost:3000${path}`);
            setText(true);
          } }
          type="button"
          data-testid={ `${index}-horizontal-share-btn` }
        >
          <img src={ shareIcon } alt="compartilhar" />
        </button>

        <img
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
          style={ { maxWidth: '100%' } }
        />

        <p data-testid={ `${index}-horizontal-top-text` }>{category}</p>
        <p data-testid={ `${index}-horizontal-name` }>{name}</p>
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
        <button type="button" data-testid="filter-by-all-btn">All</button>
        <button type="button" data-testid="filter-by-food-btn">Food</button>
        <button type="button" data-testid="filter-by-drink-btn">Drinks</button>
      </section>
      <section>
        {doneRecipes && doneRecipes.map((recipe, index) => (
          recipeCard(recipe, index)
        ))}
      </section>
    </div>
  );
}

RecipesMade.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecipesMade;

// O imagem do card de receita deve ter o atributo data-testid="${index}-horizontal-image";
// O texto da categoria da receita deve ter o atributo data-testid="${index}-horizontal-top-text";
// O texto do nome da receita deve ter o atributo data-testid="${index}-horizontal-name";
// O texto da data que a receita foi feita deve ter o atributo data-testid="${index}-horizontal-done-date";
// As tags da receita devem possuir o atributo data-testid=${index}-${tagName}-horizontal-tag;
