import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Drinks() {
  return (
    <div>
      <Header title="Bebidas" withSearchButton />
      <h1>Lista de bebidas</h1>
      <Footer />
    </div>
  );
}

export default Drinks;
