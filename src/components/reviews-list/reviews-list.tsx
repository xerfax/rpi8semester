import { JSX } from "react";
import { Review } from "../../types/review";

type ReviewsListProps = {
  reviews: Review[];
};

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  const getRatingWidth = (rating: number): string => `${(rating / 5) * 100}%`;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img
                className="reviews__avatar user__avatar"
                src={review.user.avatarUrl}
                width="54"
                height="54"
                alt={review.user.name}
              />
            </div>
            <span className="reviews__user-name">{review.user.name}</span>
            {review.user.isPro && <span className="reviews__user-status">Pro</span>}
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{ width: getRatingWidth(review.rating) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">{review.comment}</p>
            <time className="reviews__time" dateTime={review.date}>
              {formatDate(review.date)}
            </time>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
