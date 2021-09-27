import React, { useContext, useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Context from '../context/Context';
import { getMeals, getCategories } from '../services/Api';

function Food() {
  const { meals, setMealsValue } = useContext(Context);
  const [categories, setCategories] = useState();
  const [categorie, setCategorie] = useState('All');

  const MAX_FOOD_CARDS = 12;
  const MAX_CATEGORIS = 5;

  useEffect(() => {
    const fetchAPI = async () => {
      setMealsValue(await getMeals(categorie));
      setCategories(await getCategories('meals'));
    };
    fetchAPI();
  }, [categorie, setMealsValue]);

  if (meals === null) {
    global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
  }

  return (
    <div>
      <Header title="Comidas" withSearchButton />
      <h1>Lista de comidas</h1>
      {categories && categories.slice(0, MAX_CATEGORIS).map((button, index) => (
        <button
          type="button"
          name={ button.strCategory }
          key={ index }
          data-testid={ `${button.strCategory}-category-filter` }
          onClick={ () => setCategorie(button.strCategory) }
        >
          { button.strCategory }
        </button>
      ))}
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
