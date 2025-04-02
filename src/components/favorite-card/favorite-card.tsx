import React, { JSX, useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type FavoriteCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPrimium: boolean;
  previewImage: string;
  rating: number;
};

function FavoriteCard({
  id,
  title,
  type,
  price,
  isPrimium,
  previewImage,
  rating,
}: FavoriteCardProps) {
  const [, setOfferId] = useState("");
  return (
    <article
      className="favorites__card place-card"
      onMouseOver={() => setOfferId(id)}
      onMouseOut={() => setOfferId("")}
    >
      
        
        {isPrimium ?(<div className="place-card__mark"><span>Premium</span></div>):null}
     
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            tabIndex={0}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: "100%" }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Nice, cozy, warm big bed apartment</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
export default FavoriteCard;
