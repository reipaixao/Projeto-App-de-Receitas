import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Perfil() {
  const userFromlocalStorage = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <Header title="Perfil" withSearchButton={ false } />
      <h1 data-testid="page-title">Perfil</h1>
      <p data-testid="profile-email">{userFromlocalStorage.email}</p>
      <Link to="/receitas-feitas">
        <button
          type="button"
          data-testid="profile-done-btn"
        >
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"
        >
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/comidas">
        <button
          type="button"
          data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Perfil;
