import React, { useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

export default function DetailsButtons({ path }) {
  const [text, setText] = useState(false);

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
    </div>
  );
}

DetailsButtons.propTypes = {
  path: PropTypes.string.isRequired,
};
