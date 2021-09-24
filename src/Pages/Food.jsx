import React, { useContext } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';

function Food() {
  const { meals } = useContext(Context);
  const MAX_FOOD_CARDS = 12;

  return (
    <div>
      <Header title="Comidas" withSearchButton />
      <h1>Lista de comidas</h1>
      {meals.slice(0, MAX_FOOD_CARDS).map((meal, index) => (
        <Card
          key={ meal.strMeal }
          name={ meal.strMeal }
          image={ meal.strMealThumb }
          index={ index }
        />
      ))}
      <Footer />
    </div>
  );
}

export default Food;
