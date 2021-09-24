import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonsExplorer from '../components/ButtonsExplorer';

function ExploreFood() {
  return (
    <div>
      <Header title="Explorar Comidas" withSearchButton={ false } />
      <h1>Explorar Comidas</h1>
      <Footer />
      <ButtonsExplorer page="food" />
    </div>
  );
}

export default ExploreFood;
