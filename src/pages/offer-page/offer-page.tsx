import React, { JSX, useState } from "react";
import ReactDOM from "react-dom/client";
import Error404Page from "../error404-page/error404-page";
import { Logo } from "../../components/logo/logo";
import { FullOffer, OffersList } from "../../types/offer";
// import OffersList from '../../mocks/offers-list';
import { offers } from "../../mocks/offers";
import { useParams } from "react-router-dom";
import CommentSubmissionForm from "../../components/commentSubmissionForm/commentSubmissionForm";
import ReviewsList from "../../components/reviews-list/reviews-list";
import { reviews } from "../../mocks/reviews";
import { CitiesCardList } from "../../components/CitiesCardList/citiesCardList";
import Map from "../../components/Map/map";
import { CITY } from "../../mocks/city";
import { POINTS } from "../../mocks/points";
import { Points } from "../../types/map";
import List from "../../components/mapList/mapList";
import MapList from "../../components/mapList/mapList";

type OfferProps = {
  offers: FullOffer[];
  offersList: OffersList[];
};

function OfferPage({ offers, offersList }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  const [selectedPoint, setSelectedPoint] = useState<Points | null>(null);

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint || null);
  };

  // Найдем три объявления рядом (например, просто возьмем первые три из списка)
  const nearbyOffers = offers.slice(5, 8);
  if (!offer) {
    return <Error404Page />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Myemail@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPrimium ? (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              ) : null}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                {/* Избранное (isFavorite) */}
                <button
                  className={`offer__bookmark-button button ${
                    offer.isFavorite ? "offer__bookmark-button--active" : ""
                  }`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                {/* Рейтинг (rating) */}
                <div className="offer__stars rating__stars">
                  <span
                    style={{ width: `${(offer.rating / 5) * 100}%` }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              {/* Количество спален и гостей */}
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              {/* Цена */}
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                {/* Оборудование (goods) */}
                <ul className="offer__inside-list">
                  {offer.goods.map((item, index) => (
                    <li key={index} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {/* Информация о хозяине (host) */}
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper ${
                      offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                    } user__avatar-wrapper`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {/* {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )} */}
                  <span className="offer__user-status">
                    {offer.host.isPro ? "Pro" : ""}
                  </span>
                </div>
                {/* Описание (description) */}
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>

              {/* REVIEWS */}

              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{" "}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
              </section>
              {/* <Offer/> */}
              <CommentSubmissionForm />
            </div>
          </div>
          <section className="offer__map map">
            <h1>Парки города {CITY.title}:</h1>
            <MapList points={POINTS} onListItemHover={handleListItemHover} />
            <Map city={CITY} points={POINTS} selectedPoint={selectedPoint} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            {/* <OffersList
          offers={nearbyOffers}
          listClass="near-places__list places__list"
          cardClass="near-places__card place-card"
          imageWrapperClass="near-places__image-wrapper place-card__image-wrapper"
        /> */}
            <CitiesCardList offersList={nearbyOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}
export default OfferPage;
