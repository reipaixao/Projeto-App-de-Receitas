import React from 'react';
import RecipeDetail from '../components/RecipeDetailCard';
import DetailsButtons from '../components/DetailsButtons';

function RecipesInProgress() {
  return (
    <div>
      <RecipeDetail withStartRecipesButton={ false } />
      <DetailsButtons />
      <button type="button" data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default RecipesInProgress;
