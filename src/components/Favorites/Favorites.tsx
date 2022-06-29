import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { fetchFavorite } from '../../store/citySlice';
import { Hotels } from '../../types/types';
import CardFavorite from '../Card/CardFavorite';
import Header from '../Header/Header';

function Favorites(): JSX.Element {

  const token = useAppSelector((state) => state.user.user.token);
  const error = useAppSelector((state) => state.user.error);


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorite(token));
  }, []);

  const hotelsFavorite = useAppSelector ((state) => state.city.favorite);

  function Unique(arr: Hotels) {
    const uniq: string[] = [];
    arr.forEach((element) => {
      uniq.push(element.city.name);
    });
    return Array.from(new Set(uniq));
  }

  const citiesFavorite: string[] = Unique(hotelsFavorite);

  if(error) {
    return (
      <Link to='/'>
        <div style={{width: '320px', margin: '100px auto', fontSize: '24px', textAlign: 'center', color: 'red'}}>
          {error}
        </div>
      </Link>
    );}

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citiesFavorite.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link to='/' className="locations__item-link">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {hotelsFavorite.map((plac) =>
                      plac.city.name===city && <CardFavorite  hotel={plac} key={plac.id}/>,
                    )}
                  </div>
                </li>))}
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
