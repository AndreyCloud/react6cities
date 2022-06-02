import React from 'react';
import { ArrReviews } from '../../types/types';
import ReviewsItem from '../ReviewsItem/ReviewsItem';

type ReviewsListProps = {
  reviewsItem: ArrReviews
}

function ReviewsList({reviewsItem}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviewsItem.map((review) =>
        <ReviewsItem rev={review} key={review.date} />,
      )}
    </ul>
  );
}

export default ReviewsList;
