import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreFood() {
  return (
    <div>
      <Header title="Explorar Comidas" withSearchButton={ false } />
      <h1>Explorar Comidas</h1>
      <Footer />
    </div>
  );
}

export default ExploreFood;
