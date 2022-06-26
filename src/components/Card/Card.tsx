import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { fetchFavorite, fetchFavoriteChange, fetchFavoriteDelete } from '../../store/citySlice';
import { Hotel } from '../../types/types';


type CardProps = {
  hotel: Hotel,
  over?: (id: number) => void,
}

function Card({hotel, over}: CardProps): JSX.Element {

  const pathId = `/offer/${  hotel.id}` ;
  const premium = hotel.is_premium ? 'Premium' : '';
  const favorite = hotel.is_favorite;
  const token: string = useAppSelector((state) => state.user.user.token);
  const id = String(hotel.id);
  const idToken = {id, token};

  const classFavorite = (favorite) ? ('place-card__bookmark-button--active button') : ('place-card__bookmark-button button');

  const ratingStars = (() => {
    if(hotel?.rating) {
      return `${String(hotel?.rating*20)  }%`;
    } else {
      return '50%';
    }
  });

  const dispatch = useAppDispatch();

  async function handleFavorite() {
    if(favorite) {
      await dispatch(fetchFavoriteDelete(idToken));
      dispatch(fetchFavorite(token));
    } else {
      dispatch(fetchFavoriteChange(idToken));
    }}

  return (
    <article onMouseOver={() => over?.(hotel.id)} className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>{premium}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={pathId}>
          <img
            className="place-card__image"
            src={hotel.preview_image}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{hotel.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={handleFavorite} className={classFavorite} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingStars() }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={pathId}>{hotel.title}</Link>
        </h2>
        <p className="place-card__type">{hotel.type}</p>
      </div>
    </article>
  );
}

export default Card;
