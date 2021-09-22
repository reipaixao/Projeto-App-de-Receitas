import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DrinksByIngredient() {
  return (
    <div>
      <Header title="Explorar Ingredientes" withSearchButton={ false } />
      <h1>Explorar Ingredientes</h1>
      <Footer />
    </div>
  );
}

export default DrinksByIngredient;
