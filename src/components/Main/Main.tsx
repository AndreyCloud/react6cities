import { useState } from 'react';
import { useAppSelector } from '../../hooks/useApps';
import { Cities } from '../../types/types';
import Card from '../Card/Card';
import FilterPlaces from '../FilterPlaces';
import Header from '../Header/Header';
import LocationsItem from '../LocationsItem/LocationsItem';
import Map from '../Map/Map';


type MainProps = {
  cities: Cities;
}

function Main({cities}: MainProps): JSX.Element {

  const hotelsCitys = useAppSelector ((state) => state.city.hotelsCity);
  const cityChoose = useAppSelector((state) => state.city.city);
  const error = useAppSelector((state) => state.city.error);
  const sorted = useAppSelector((state) => state.city.sort);

  const hotelsCitySort = ((sort: string | null) => {
    if(sort === 'price') {
      return [...hotelsCitys].sort((a, b) => a.price - b.price);
    }
    if (sort === '-price') {
      return  [...hotelsCitys].sort((a, b) => b.price - a.price);
    }
    if (sort === 'rating') {
      return [...hotelsCitys].sort((a, b) => b.rating - a.rating);
    }
    return hotelsCitys;
  });

  const hotelsCity = hotelsCitySort(sorted);

  const cityLoc = (hotelsCity.length !==0) ? hotelsCity[0].city : {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  };

  const [over, setOver] = useState(0);

  const overMouse = ((id: number): void => {
    setOver(id);
  });

  const selected  = (hotelsCity.find((place) => (place.id) === over))?.id;

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <Header/>
        {/* <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link to="/favorites" className="header__nav-link header__nav-link--profile" >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header> */}

        <main className="page__main page__main--index">
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
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <h3>{error}</h3>
                <b className="places__found">{hotelsCity.length} places to stay {cityChoose}</b>
                <FilterPlaces/>
                {/* <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span onClick={() => selectedFilter()} className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className={filterClass}>
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form> */}
                <div className="cities__places-list places__list tabs__content">
                  {hotelsCity.map((hotel) =>
                    <Card over={overMouse} hotel={hotel} key={hotel.id}/>,
                  )}
                </div>
              </section>
              <div className="cities__right-section">
                <div className="cities__map map">
                  <Map key={cityChoose} places={hotelsCity} selected={selected} city={cityLoc}/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
