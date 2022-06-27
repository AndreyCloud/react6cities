import React from 'react';
import { useAppSelector } from '../../hooks/useApps';
import { Cities } from '../../types/types';
import Header from '../Header/Header';
import LocationsItem from '../LocationsItem/LocationsItem';

type MainEmptyProps = {
  cities: Cities;
}

function MainEmpty({cities}: MainEmptyProps): JSX.Element {
  const cityChoose = useAppSelector((state) => state.city.city);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) =>
                <LocationsItem key={city.name} city={city}/>,
              )}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">No places to stay available</b>
                <p className="cities__status-description">We could not find any property available at the moment in {cityChoose}</p>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainEmpty;
