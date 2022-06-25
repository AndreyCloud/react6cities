import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useApps';
// import { ArrPlaces } from '../../types/types';
import Card from '../Card/Card';
import Header from '../Header/Header';

// type FavoritesProps = {
//   places: ArrPlaces;
// }

function Favorites(): JSX.Element {

  const hotelsCity = useAppSelector ((state) => state.city.hotelsCity);

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {hotelsCity.map((plac) =>
                    plac.is_favorite===true && <Card  hotel={plac} key={plac.id}/>,
                  )}
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to='/' className="footer__logo-link" >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
