import React from 'react';

function RecipeDetail() {
  const index = 0;
  return (
    <section>
      <img data-testid="recipe-photo" alt="recipe" />
      <h2 data-testid="recipe-title"> </h2>
      <button data-testid="share-btn" type="button">Share</button>
      <button data-testid="favorite-btn" type="button">Favorite</button>
      <p
        data-testid="recipe-category"
      >
        Categoria
      </p>
      <p
        data-testid="instructions"
      >
        Instruções
      </p>
      <p
        data-testid={ `${index}-ingredient-name-and-measure` }
      >
        Ingredientes
      </p>
      <span
        data-testid="video"
      />
      <p
        data-testid={ `${index}-recomendation-card` }
      >
        RecomendationCard
      </p>
      <button type="button" data-testid="start-recipe-btn">Iniciar Receita</button>
    </section>
  );
}

export default RecipeDetail;
