import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  return (
    <div>
      <Header title="Perfil" withSearchButton={ false } />
      <h1 data-testid="page-title">Perfil</h1>
      <Footer />
    </div>
  );
}

export default Perfil;
