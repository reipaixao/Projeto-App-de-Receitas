import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './MyPages/Login';
import Comidas from './MyPages/Comidas';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/comidas" component={ Comidas } />
      </Switch>
    </div>
  );
}

export default App;
