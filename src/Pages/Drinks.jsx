import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Context from '../context/Context';

function Drinks() {
  const { drinks } = useContext(Context);
  const MAX_DRINK_CARDS = 12;

  if (drinks === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header title="Bebidas" withSearchButton />
      <h1>Lista de bebidas</h1>
      {drinks && drinks.slice(0, MAX_DRINK_CARDS).map((drink, index) => (
        <Card
          key={ drink.strDrink }
          name={ drink.strDrink }
          image={ drink.strDrinkThumb }
          index={ index }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Drinks;
