import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreScreen() {
  return (
    <div>
      <Header title="Explorar" withSearchButton={ false } />
      <h1>Explorar</h1>
      <Footer />
    </div>
  );
}

export default ExploreScreen;
