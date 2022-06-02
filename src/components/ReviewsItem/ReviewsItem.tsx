import React from 'react';
import { Review } from '../../types/types';

type ReviewsItemProps = {
  rev: Review
}


function ReviewsItem({rev}: ReviewsItemProps): JSX.Element {

  const date = new Date(rev.date).toDateString();

  // eslint-disable-next-line no-console
  console.log(date);

  return (
    <div>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={rev.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {rev.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: '80%'}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {rev.comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{date}</time>
        </div>
      </li>
    </div>
  );
}

export default ReviewsItem;
