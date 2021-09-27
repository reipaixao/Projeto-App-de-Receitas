import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Context from '../context/Context';
import { getDrinks, getCategories } from '../services/Api';

function Drinks() {
  const { drinks, categories, setDrinksValue, setCategoris } = useContext(Context);
  const MAX_DRINK_CARDS = 12;
  const MAX_CATEGORIS = 5;

  useEffect(() => {
    const fetchDrinks = async () => {
      setDrinksValue(await getDrinks());
      setCategoris(await getCategories('drinks'));
    };
    fetchDrinks();
  });

  if (drinks === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }
  return (
    <div>
      <Header title="Bebidas" withSearchButton />
      <h1>Lista de bebidas</h1>
      {categories && categories.slice(0, MAX_CATEGORIS).map((categorie, index) => (
        <button
          type="button"
          key={ index }
          data-testid={ `${categorie.strCategory}-category-filter` }
        >
          { categorie.strCategory }
        </button>
      ))}
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
