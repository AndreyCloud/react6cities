import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { fetchFavorite, fetchFavoriteChange, fetchFavoriteDelete, fetchHotelsNearby } from '../../store/citySlice';
import { Hotel } from '../../types/types';
import Card from '../Card/Card';
import ErrorPage from '../ErrorPage/ErrorPage';
import Header from '../Header/Header';
import Map from '../Map/Map';
import ReviewPost from '../ReviewPost/ReviewPost';
import ReviewsList from '../ReviewsList/ReviewsList';


function Offer(): JSX.Element {

  const hotels = useAppSelector ((state) => state.city.hotels);
  const hotelsNearby = useAppSelector ((state) => state.city.hotelsNearby);
  const error = useAppSelector((state) => state.city.error);
  const maxId = hotels.length;

  const params = useParams();
  const idItem = (params.id) ? params.id : '';

  const hotel: Hotel | undefined = hotels.find((e) => String(e.id) === idItem);
  const token: string = useAppSelector((state) => state.user.user.token);
  const id = String(hotel?.id);
  const idToken = {id, token};
  const classFavorite = (hotel?.is_favorite) ? ('property__bookmark-button button property__bookmark-button--active') : ('property__bookmark-button button');

  const cityLoc = (hotel) ? hotel.city : {
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
    name: 'Paris',
  };

  const hotelsMap = (hotel) ? [...hotelsNearby, hotel] : hotelsNearby;

  const premium = hotel?.is_premium && <div className="property__mark"><span>Premium</span></div> ;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const goLogin = () => navigate('/login');

  const selected = (() => {
    if(idItem) {
      return +idItem;
    } else {
      return 0 ;
    }
  });

  const ratingStars = (() => {
    if(hotel?.rating) {
      return `${String(hotel?.rating*20)  }%`;
    } else {
      return '50%';
    }
  });

  function smoothscroll(){
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      window.requestAnimationFrame(smoothscroll);
      window.scrollTo (0,currentScroll - (currentScroll/25));
    }
  }

  useEffect (() => {
    dispatch(fetchHotelsNearby(idItem));
    smoothscroll();
  }, [hotel]);


  if(+idItem > maxId) {
    return (
      <ErrorPage/>
    );
  }

  async function handleFavorite() {
    if(token) {
      if(hotel?.is_favorite) {
        await dispatch(fetchFavoriteDelete(idToken));
        dispatch(fetchFavorite(token));
      } else {
        dispatch(fetchFavoriteChange(idToken));
      }
    } else {
      goLogin();
    }
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {hotel?.images.slice(0, 6).map((img) => (
                <div key={img + String(Math.random)} className="property__image-wrapper">
                  <img className="property__image" src={img} alt="studio"/>
                </div>),
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {premium}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {hotel?.title}
                </h1>
                <button onClick={handleFavorite} className={classFavorite} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingStars()}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{hotel?.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {hotel?.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {hotel?.bedrooms} bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                Max {hotel?.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{hotel?.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {hotel?.goods.map ((good) => (
                    <li key={good} className="property__inside-item">
                      {good}
                    </li>),
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={hotel?.host.avatar_url} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {hotel?.host.name}
                  </span>
                  <span className="property__user-status">
                    {hotel?.host.is_pro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {hotel?.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList idItem={idItem}/>
                { token && <ReviewPost id={idItem} token={token}/>}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map key={Math.random()} places={hotelsMap} selected={selected()} city={cityLoc}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <h3>{error}</h3>
              {hotelsNearby.map((hotell) =>
                <Card hotel={hotell} key={hotell.id}/>,
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
