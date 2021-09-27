import React, { useContext, useEffect } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import { getMeals } from '../services/Api';

function Food() {
  const { meals, setMealsValue } = useContext(Context);
  const MAX_FOOD_CARDS = 12;

  useEffect(() => {
    const fetchMeals = async () => {
      setMealsValue(await getMeals());
    };
    fetchMeals();
  });

  if (meals === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    <div>
      <Header title="Comidas" withSearchButton />
      <h1>Lista de comidas</h1>
      {meals && meals.slice(0, MAX_FOOD_CARDS).map((meal, index) => (
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
