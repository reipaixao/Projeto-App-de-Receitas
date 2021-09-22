import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIconSrc from '../images/profileIcon.svg';
import searchIconSrc from '../images/searchIcon.svg';

function Header({ title, withSearchButton }) {
  return (
    <div>
      <Link
        to="/perfil"
      >
        <img src={ profileIconSrc } alt="Profile Icon" data-testid="profile-top-btn" />
      </Link>
      <h1 data-testid="page-title">{title}</h1>
      {withSearchButton
        && <img src={ searchIconSrc } alt="Search Icon" data-testid="search-top-btn" />}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  withSearchButton: PropTypes.bool.isRequired,
};

export default Header;
