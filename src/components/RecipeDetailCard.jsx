import React, { useEffect, useState } from 'react';
// https://reactrouter.com/web/api/Hooks
import { useLocation, useParams } from 'react-router-dom';
import { getMealById, getDrinkById } from '../services/Api';
import shareIcon from '../images/shareIcon.svg';

function RecipeDetail() {
  const idMeal = 52771;
  const idDrink = 178319;
  const { pathname } = useLocation();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // Feito conjuntamento no plantão com o André
  const fillIngredients = (meal) => {
    const strMeal = Object.entries(meal[0]);
    const strIngredient = strMeal.filter(([chave, valor]) => chave
      .includes('strIngredient') && valor);
    const strMeasure = strMeal.filter(([chave, valor]) => chave
      .includes('strMeasure') && valor);
    return strIngredient.map((item, index) => `${item[1]} - ${strMeasure[index][1]}`);
  };

  useEffect(() => {
    const getRecipe = async () => {
      if (pathname.includes('comidas')) {
        setRecipe(await getMealById(idMeal));
        const meal = await getMealById(idMeal);
        setIngredients(fillIngredients(meal));
      } else {
        setRecipe(await getDrinkById(idDrink));
        const drink = await getDrinkById(idDrink);
        setIngredients(fillIngredients(drink));
      }
    };
    getRecipe();
  }, [id, pathname]);

  const index = 0;

  return (
    <div>
      {/* Com auxilio do Murilo Rainho */}
      {(recipe.length === 1) && (
        <section>
          <img
            style={ { width: '200px' } }
            src={ recipe[0].strMealThumb || recipe[0].strDrinkThumb }
            data-testid="recipe-photo"
            alt="cocktail"
          />
          <h2 data-testid="recipe-title">{recipe[0].strMeal || recipe[0].strDrink}</h2>
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="compartilhar" />
          </button>
          <button data-testid="favorite-btn" type="button">Favorite</button>
          <p
            data-testid="recipe-category"
          >
            {recipe[0].strCategory === 'Cocktail'
              ? recipe[0].strAlcoholic : recipe[0].strCategory}
          </p>
          <ul>
            { ingredients.map((ingredient, idx) => (
              <li
                data-testid={ `${idx}-ingredient-name-and-measure` }
                key={ `${idx}` }
              >
                { ingredient }
              </li>
            ))}
          </ul>
          <p
            data-testid="instructions"
          >
            Instruções
            { recipe[0].strInstructions }
          </p>
          {/* https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti */}
          {pathname.includes('comidas') ? (
            <iframe
              width="200"
              height="120"
              src={ `${(recipe[0].strYoutube).replace('watch?v=', 'embed/')}` }
              title="video"
              data-testid="video"
            />) : null}
          <p
            data-testid={ `${index}-recomendation-card` }
          >
            RecomendationCard
          </p>
          <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
        </section>
      )}
    </div>
  );
}

export default RecipeDetail;
