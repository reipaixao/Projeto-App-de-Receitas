import React from 'react';
import RecipeDetailCard from '../components/RecipeDetailCard';

const style = {
  margin: '0 0 100px 0',
};

function RecipeDetail() {
  return (
    <div style={ style }>
      <RecipeDetailCard withStartButton />
    </div>
  );
}

export default RecipeDetail;
