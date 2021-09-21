import React from 'react';
import { Link } from 'react-router-dom';
import profileIconSrc from '../images/profileIcon.svg';
import searchIconSrc from '../images/searchIcon.svg';

function Header() {
  return (

    <div>
      <Link
        to="/perfil"
      >
        <img src={ profileIconSrc } alt="Profile Icon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">Comidas</h1>
      <img src={ searchIconSrc } alt="Search Icon" data-testid="search-top-btn" />
    </div>

  );
}

export default Header;
