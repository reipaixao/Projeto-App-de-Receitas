import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import '../CSS/footer.css';

function Footer() {
  return (
    <section className="footer__container" data-testid="footer">
      <Link
        className="footer__link drinks"
        to="/bebidas"
      >
        <img
          src={ drinkIcon }
          alt="link para a pagina de Drinks"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link
        className="footer__link explorer"
        to="/explorar"
      >
        <img
          src={ exploreIcon }
          alt="link para a página de explorar"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link
        className="footer__link food"
        to="/comidas"
      >
        <img
          src={ mealIcon }
          alt="link para a página de comidas "
          data-testid="food-bottom-btn"
        />
      </Link>
    </section>
  );
}

export default Footer;
