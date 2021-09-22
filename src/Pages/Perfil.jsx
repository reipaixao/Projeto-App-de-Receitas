import React from 'react';
import Header from '../components/Header';

function Perfil() {
  return (
    <div>
      <Header title="Perfil" withSearchButton={ false } />
      <h1 data-testid="page-title">Perfil</h1>
    </div>
  );
}

export default Perfil;
