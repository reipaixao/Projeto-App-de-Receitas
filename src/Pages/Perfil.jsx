import React, { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Context from '../context/Context';

function Perfil() {
  const { emailInput } = useContext(Context);
  return (
    <div>
      <Header title="Perfil" withSearchButton={ false } />
      <h1 data-testid="page-title">Perfil</h1>
      <p data-testid="profile-email">{emailInput}</p>
      <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      <button type="button" data-testid="profile-favorite-btn">Receitas Favoritas</button>
      <button type="button" data-testid="profile-logout-btn">Sair</button>
      <Footer />
    </div>
  );
}

export default Perfil;
