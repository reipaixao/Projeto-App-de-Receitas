import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // console.log(favoriteRecipes);

  const [favorite, setFavorite] = useState(favoriteRecipes);
  const [copyUrl, setCopyUrl] = useState('');
  const [filter, setFilter] = useState('all');

  function handleFilter({ target }) {
    const { value } = target;
    setFilter(value);
  }
  // consulta ao site - https://pt-br.reactjs.org/docs/hooks-effect.html
  // useEffect(filterFavoriteRecipes, [FavoriteRecipes, setFavorite]); // má pratica mas roda o 64
  function filterRecipes() {
    if (filter === 'all') return favorite;
    if (filter !== 'all') {
      return favorite.filter((recipe) => recipe.type === filter);
    }
  }

  const copyLink = ({ type, id }) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setCopyUrl('Link copiado!');
    setInterval(() => setCopyUrl(''), '2000');
  };

  const clickdisfavor = (id) => {
    const newFavorites = favorite.filter((item) => item.id !== id);
    // console.log(newFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavorite(newFavorites);
  };

  const recipes = filterRecipes();

  return (
    <div className="favorite-recipes-section">

      <Header title="Receitas Favoritas" withSearchButton={ false } />
      <button
        value="all"
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ (event) => handleFilter(event) }
      >
        All
      </button>
      <button
        value="comida"
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ (event) => handleFilter(event) }
      >
        Food
      </button>
      <button
        value="bebida"
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ (event) => handleFilter(event) }
      >
        Drinks
      </button>
      {
        favorite ? recipes.map((item, index) => {
          if (item.type === 'comida') {
            return (
              <section key={ index }>
                <Link to={ `/${item.type}s/${item.id}` }>
                  <img
                    width="200px"
                    data-testid={ `${index}-horizontal-image` }
                    alt={ `recipe ${item.name}` }
                    src={ item.image }
                  />
                  <span>{ copyUrl }</span>
                  <span
                    data-testid={ `${index}-horizontal-top-text` }
                  >
                    { `${item.area} - ${item.category}` }
                  </span>
                  <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
                </Link>
                <button
                  type="button"
                  onClick={ () => copyLink(item) }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    alt="share"
                    src={ shareIcon }
                  />
                </button>
                <button
                  type="button"
                  onClick={ () => clickdisfavor(item.id) }
                >
                  <img
                    data-testid={ `${index}-horizontal-favorite-btn` }
                    src={ blackHeartIcon }
                    alt="favorite"
                  />
                </button>
              </section>
            );
          }
          return (
            <section key={ index }>
              <Link to={ `/${item.type}s/${item.id}` }>
                <img
                  width="200px"
                  data-testid={ `${index}-horizontal-image` }
                  alt={ `recipe ${item.name}` }
                  src={ item.image }
                />
                <span>{ copyUrl }</span>
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  { item.alcoholicOrNot }
                </span>
                <span data-testid={ `${index}-horizontal-name` }>{ item.name }</span>
              </Link>
              <button
                type="button"
                onClick={ () => copyLink(item) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  alt="share"
                  src={ shareIcon }
                />
              </button>
              <button
                type="button"
                onClick={ () => clickdisfavor(item.id) }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeartIcon }
                  alt="favorite"
                />
              </button>
            </section>
          );
        }) : ''
      }
    </div>
  );
}

export default FavoriteRecipes;
