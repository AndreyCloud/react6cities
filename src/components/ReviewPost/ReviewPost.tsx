import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useApps';
import { fetchAddComment } from '../../store/citySlice';

type ReviewPostProps = {
  id: string;
  token: string,
}

function ReviewPost({id, token}: ReviewPostProps): JSX.Element {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorComment, setErrorComment] = useState('Review cannot be empty!');
  const [formValid, setFornValid] = useState(false);

  useEffect(() => {
    if (errorComment || rating === 0) {
      setFornValid(false);
    } else {
      setFornValid(true);
    }
  }, [errorComment, rating]);

  useEffect(() => {
    setRating(0);
    setComment('');
    setErrorComment('Review cannot be empty!');
  },[id] );

  const CommentHandler = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComment(e.target.value);
    if (e.target.value.length <= 50) {
      setErrorComment('Review must be at least 50 characters long.');
    } else {
      setErrorComment('');
    }
  };

  const RatingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(+e.target.value);
  };

  const dispatch = useAppDispatch();
  const commentPostId = {id, comment, rating, token};

  const sendComment = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(fetchAddComment(commentPostId));
    setComment('');
    setRating(0);
    setErrorComment('Review cannot be empty!');
  };

  return (
    <form onSubmit={sendComment} className="reviews__form form" >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          checked={rating === 5}
          onChange={(e) => RatingHandler(e)}
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          checked={rating === 4}
          onChange={(e) => RatingHandler(e)}
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          checked={rating === 3}
          onChange={(e) => RatingHandler(e)}
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          checked={rating === 2}
          onChange={(e) => RatingHandler(e)}
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          checked={rating === 1}
          onChange={(e) => RatingHandler(e)}
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        onChange={(e) => CommentHandler(e)}
        value={comment}
        maxLength={300}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {!formValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewPost;
