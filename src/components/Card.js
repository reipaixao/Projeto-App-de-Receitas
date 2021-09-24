import React from 'react';
import PropTypes from 'prop-types';

function Card({ name, image, index }) {
  return (
    <div data-testid={ `${index}-recipe-card` } style={ { maxWidth: 300 } }>
      <p data-testid={ `${index}-card-name` }>{name}</p>
      <img
        src={ image }
        alt={ name }
        data-testid={ `${index}-card-img` }
        style={ { maxWidth: '100%' } }
      />
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export default Card;
