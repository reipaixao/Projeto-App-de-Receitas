import React from 'react';
import { Link } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetailCard';
import DetailsButtons from '../components/DetailsButtons';

function RecipesInProgress() {
  return (
    <div>
      <RecipeDetail withStartRecipesButton={ false } />
      <DetailsButtons />
      <Link to="/receitas-feitas">
        <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
      </Link>
    </div>
  );
}

export default RecipesInProgress;
