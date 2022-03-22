import React, { useContext, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getDataFromLocalStorage,
  saveNewFavorite,
  saveOnLocalStorage,
} from '../services/LocalStorage';
import Context from '../context/Context';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

export default function FavoriteButton(props) {
  const { recipe } = props;
  const location = useLocation();
  const currentPage = location.pathname;
  const { id } = useParams();
  const { heartState, setHeartState } = useContext(Context);

  const onClickFavorite = () => {
    setHeartState(!heartState);
    const favoriteRecipes = getDataFromLocalStorage('favorite');
    if (favoriteRecipes.some((favorite) => favorite.id === id)) {
      // setHeartState(false);
      saveOnLocalStorage('favoriteRecipes', favoriteRecipes
        .filter((favorite) => favorite.id !== id));
    } else {
      const page = currentPage.includes('comidas') ? 'comida' : 'bebida';
      // setHeartState(true);
      const addNewFav = saveNewFavorite(recipe, page);
      saveOnLocalStorage('favoriteRecipes', [...favoriteRecipes, addNewFav]);
    }
  };

  useEffect(() => {
    const favorites = getDataFromLocalStorage('favoriteRecipes');
    console.log(favorites, 'fav');
    favorites.forEach((favorite) => {
      if (favorite.id === id) setHeartState(true);
    });
  }, [id]);

  return (
    <button
      data-testid="favorite-btn"
      type="button"
      onClick={ onClickFavorite }
      src={ heartState
        ? blackHeartIcon : whiteHeartIcon }
    >
      <img
        src={ heartState
          ? blackHeartIcon : whiteHeartIcon }
        alt="favoriteBtn"
      />
    </button>
  );
}

FavoriteButton.propTypes = {
  recipe: PropTypes.objectOf(
    PropTypes.string,
  ).isRequired,
};
