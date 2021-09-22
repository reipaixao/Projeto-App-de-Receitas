import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Receitas Favoritas" withSearchButton={ false } />
      <h1>Receitas Favoritas</h1>
    </div>
  );
}

export default FavoriteRecipes;
