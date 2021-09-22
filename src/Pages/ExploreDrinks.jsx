import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreDrinks() {
  return (
    <div>
      <Header title="Explorar Bebidas" withSearchButton={ false } />
      <h1>Explorar Bebidas</h1>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
