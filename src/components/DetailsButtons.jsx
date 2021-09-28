import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function DetailsButtons({ path }) {
  const [text, setText] = useState(false);
  // const { pathname } = useLocation();
  // console.log(path, 'path');

  return (
    <div>
      { (text) && (<h3>Link copiado!</h3>) }
      <button
        onClick={ () => {
          copy(`http://localhost:3000${path}`);
          setText(true);
        } }
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="compartilhar" />
      </button>
      <button data-testid="favorite-btn" type="button">Favorite</button>
    </div>
  );
}

DetailsButtons.propTypes = {
  path: PropTypes.string.isRequired,
};
