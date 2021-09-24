import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Food from './Pages/Food';
import Perfil from './Pages/Perfil';
import Drinks from './Pages/Drinks';
import ExploreScreen from './Pages/ExploreScreen';
import ExploreFood from './Pages/ExploreFood';
import ExploreDrinks from './Pages/ExploreDrinks';
import FoodByIngredient from './Pages/FoodsByIngredient';
import DrinksByIngredient from './Pages/DrinksByIngredient';
import FoodsByOrigin from './Pages/FoodsByOrigin';
import RecipesMade from './Pages/ RecipesMade';
import FavoriteRecipes from './Pages/FavoriteRecipes';
import RecipeDetail from './Pages/RecipeDetail';
import Provider from './context/Provider';
import Area from './Pages/Area';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Food } />
        <Route exact path="/bebidas" component={ Drinks } />
        <Route exact path="/explorar" component={ ExploreScreen } />
        <Route exact path="/explorar/comidas" component={ ExploreFood } />
        <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
        <Route exact path="/explorar/comidas/area" component={ Area } />

        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ FoodByIngredient }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ DrinksByIngredient }
        />
        <Route exact path="/explorar/comidas/area" component={ FoodsByOrigin } />
        <Route exact path="/receitas-feitas" component={ RecipesMade } />
        <Route exact path="/receitas-favoritas" component={ FavoriteRecipes } />
        <Route exact path="/perfil" component={ Perfil } />
        <Route exact path="/comidas/:id" component={ RecipeDetail } />
        <Route exact path="/bebidas/:id" component={ RecipeDetail } />
      </Switch>
    </Provider>
  );
}

export default App;
