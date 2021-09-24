import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Explore from '../components/Explore';

function ExploreScreen() {
  return (
    <div>
      <Header title="Explorar" withSearchButton={ false } />
      <Explore />
      <Footer />
    </div>
  );
}

export default ExploreScreen;
