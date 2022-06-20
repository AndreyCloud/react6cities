import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { fetchHotelComments } from '../../store/citySlice';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

type ReviewsListProps = {
  idItem: string;
};

function ReviewsList({ idItem }: ReviewsListProps): JSX.Element {
  const comments = useAppSelector((state) => state.city.comments);
  const error = useAppSelector((state) => state.city.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotelComments(idItem));
  }, [idItem]);

  return (
    <>
      <h2 className="reviews__title">
        {error}
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {comments.map((review) => (
          <ReviewsItem rev={review} key={Math.random()} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
