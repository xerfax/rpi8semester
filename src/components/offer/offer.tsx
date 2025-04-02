
import React from 'react';

type OfferProps = {
  avatar: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
};

const Offer: React.FC<OfferProps> = ({ avatar, userName, rating, text, date }) => {
  const ratingWidth = `${(rating / 5) * 100}%`;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar}  alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingWidth }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
};

export default Offer;
