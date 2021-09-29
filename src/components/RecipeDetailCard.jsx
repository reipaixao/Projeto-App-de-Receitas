import React, { useEffect, useState } from 'react';
// https://reactrouter.com/web/api/Hooks
import { useLocation, useParams, Link } from 'react-router-dom';
import { getMealById, getDrinkById } from '../services/Api';
// import shareIcon from '../images/shareIcon.svg';
import RecomendationCard from './RecomendationCard';
import '../CSS/ReciceDetailCard.css';
import DetailsButtons from './DetailsButtons';

function RecipeDetail() {
  const { pathname } = useLocation();
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // Feito em conjunto com o André em plantão
  const fillIngredients = (meal) => {
    const strMeal = Object.entries(meal[0]);
    const strIngredient = strMeal.filter(([chave, valor]) => chave
      .includes('strIngredient') && valor);
    const strMeasure = strMeal.filter(([chave, valor]) => chave
      .includes('strMeasure') && valor);
    return strIngredient.map((item, index) => {
      if (strMeasure[index] !== undefined) {
        return `${item[1]} - ${strMeasure[index][1]}`;
      } return `${item[1]}`;
    });
  };

  useEffect(() => {
    const getRecipe = async () => {
      if (pathname.includes('comidas')) {
        setRecipe(await getMealById(id));
        const meal = await getMealById(id);
        setIngredients(fillIngredients(meal));
      } else {
        setRecipe(await getDrinkById(id));
        const drink = await getDrinkById(id);
        setIngredients(fillIngredients(drink));
      }
    };
    getRecipe();
  }, [id, pathname]);

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
          <DetailsButtons path={ `${pathname}` } />
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
          <div>
            <RecomendationCard
              path={ pathname.includes('comidas') ? 'comida' : 'bebida' }
            />
          </div>
          <Link to={ `${pathname}/in-progress` }>
            <button
              className="details-start-btn"
              type="button"
              data-testid="start-recipe-btn"
            >
              Iniciar Receita
            </button>
          </Link>
        </section>
      )}
    </div>
  );
}

export default RecipeDetail;
