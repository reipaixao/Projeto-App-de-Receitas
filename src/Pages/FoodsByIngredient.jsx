import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMealIngredients } from '../services/Api';
import IngredientsCard from '../components/IngredientsCard';

function FoodByIngredient() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const MAX_LENGTH = 12;
  useEffect(() => {
    const getIngredients = async () => {
      const result = await getMealIngredients();
      setIngredientsList(result.meals);
    };
    getIngredients();
  }, []);

  const URL = 'https://www.themealdb.com/images/ingredients/';

  return (
    <div>
      Pagina SearchMealsIngredients
      <Header title="Explorar Ingredientes" />
      {ingredientsList.map((ingredient, index) => (
        index < MAX_LENGTH ? (
          <IngredientsCard
            key={ index }
            index={ index }
            ingredientImg={ `${URL}${ingredient.strIngredient}-Small.png` }
            ingredientName={ ingredient.strIngredient }
          />
        ) : (null)
      ))}
      <Footer />
    </div>
  );
}

export default FoodByIngredient;
