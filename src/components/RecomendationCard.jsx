import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// https://react-slick.neostack.com/docs/get-started
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import {
  getRecomendationsDrinks,
  getRecomendationsMeals } from '../services/Api';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return recomendations.length ? (
    <section>
      <Slider { ...settings }>
        {recomendations.map((recipe, index) => (index < MAX_CARD_RECOMENDATIONS ? (
          <div data-testid={ `${index}-recomendation-card` } key={ index }>
            <img
              style={ { width: '200px' } }
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="Recipe"
            />
            <span
              data-testid={ `${index}-recomendation-title` }
            >
              { recipe.strMeal || recipe.strDrink }
            </span>
          </div>
        ) : null))}
      </Slider>
    </section>
  ) : <p>Loading</p>;
}

RecomendationCard.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RecomendationCard;
