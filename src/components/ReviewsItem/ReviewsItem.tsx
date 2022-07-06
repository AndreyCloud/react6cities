import React from 'react';
import { Comment } from '../../types/types';

type CommentItemProps = {
  rev: Comment
}


function ReviewsItem({rev}: CommentItemProps): JSX.Element {

  const date = new Date(rev.date).toDateString();
  const dateArray = date.split(' ');
  const dateMY = `${dateArray[1]  } ${  dateArray[3]}`;

  const ratingStars = (() => {
    if(rev.rating) {
      return `${String(rev.rating*20)  }%`;
    } else {
      return '50%';
    }
  });

  return (
    <div>
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={rev.user.avatar_url} width="54" height="54" alt="Reviews avatar"/>
          </div>
          <span className="reviews__user-name">
            {rev.user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: ratingStars()}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {rev.comment}
          </p>
          <time className="reviews__time" dateTime="2019-04-24">{dateMY}</time>
        </div>
      </li>
    </div>
  );
}

export default ReviewsItem;
