import React from 'react';
import profileIconSrc from '../images/profileIcon.svg';
import searchIconSrc from '../images/searchIcon.svg';

function Header() {
  return (
    <div>
      <img src={ profileIconSrc } alt="Profile Icon" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">Comidas</h1>
      <img src={ searchIconSrc } alt="Profile Icon" data-testid="search-top-btn" />
    </div>
  );
}

export default Header;
