import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  getRecomendationsDrinks,
  getRecomendationsMeals } from '../services/Api';

function RecomendationCard({ path }) {
  const [recomendations, setRecomendations] = useState([]);
  // const { pathname } = useLocation();
  const MAX_CARD_RECOMENDATIONS = 6;

  useEffect(() => {
    const getRecipe = async () => {
      if (path === 'comida') {
        setRecomendations(await getRecomendationsDrinks());
      } else {
        setRecomendations(await getRecomendationsMeals());
      }
    };
    getRecipe();
  }, [path]);

  console.log(path, 'tipo');
  console.log(recomendations, 'recom');

  return recomendations.length ? (
    <section>
      {recomendations.map((recipe, index) => (index < MAX_CARD_RECOMENDATIONS ? (
        <div data-testid={ `${index}-recomendation-card` } key={ index }>
          <img src={ recipe.strMealThumb || recipe.strDrinkThumb } alt="Recipe Thumb" />
        </div>
      ) : null))}
    </section>
  ) : <p>Loading</p>;
}

RecomendationCard.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecomendationCard;
