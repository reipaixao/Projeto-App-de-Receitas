import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Food() {
  return (
    <div>
      <Header title="Comidas" withSearchButton />
      <SearchBar />
      <h1>Lista de comidas</h1>
      <Footer />
    </div>
  );
}

export default Food;
