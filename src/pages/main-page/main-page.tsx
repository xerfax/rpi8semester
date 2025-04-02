import React, { JSX, useState } from "react";
import { Link } from "react-router-dom";
import CitiesCard from "../../components/cities-card/cities-card";
import { Logo } from "../../components/logo/logo";
import { OffersList } from "../../types/offer";
import { CitiesCardList } from "../../components/CitiesCardList/citiesCardList";
import Map from "../../components/Map/map";
import { CITY } from "../../mocks/city";
import { POINTS } from "../../mocks/points";
import { Points } from "../../types/map";
import MapList from "../../components/mapList/mapList";
import { useAppSelector } from "../../hooks";
import { CitiesList } from "../../components/citiesList/сitiesList";
import { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options";
import { sortOffersByType } from "../../utils";
import { BlockName } from '../../types/blockName'; // Убедитесь, что путь правильный


//Временная функция для фильтрации предложений по городу
const getOfferByCity = (
  cityName: string | undefined,
  offersList: OffersList[]
) => {
  if (!cityName) return [];
  return offersList.filter((offer) => offer.city.name === cityName);
};

type MainPageProps = {
  rentalOffersCount: number;
  offersList: OffersList[];
};

function MainPage({
  rentalOffersCount,
  offersList,
}: MainPageProps): JSX.Element {
  const [selectedPoint, setSelectedPoint] = useState<Points | null>(null);

  const handlePointHover = (listItemName: string) => {
    const currentPoint = POINTS.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint || null);
  };

  const selectedCity = useAppSelector((state) => state.city);
  const offersLists = useAppSelector((state) => state.offers);
  const selectedCityOffers = getOfferByCity(selectedCity?.name, offersList);
  const cityRentalOffersCount = selectedCityOffers.length;

  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(
    undefined
  );

  const handleOfferHover = (offerId: string) => {
    const currentOffer = offersLists.find((offer) => offer.id === offerId);
    setSelectedOffer(currentOffer);
  };

  const [activeSort, setActiveSort] = useState<SortOffer>("Popular");

  return (
    <div className="page page--gray page--main">
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
                  <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {cityRentalOffersCount} places to stay in {selectedCity?.name}
              </b>
              <SortOptions
                activeSorting={activeSort}
                onChange={(newSorting) => setActiveSort(newSorting)}
              />
              <CitiesCardList block={BlockName.AllPages} offersList={sortOffersByType(selectedCityOffers, activeSort)}
              onListItemHover={handleOfferHover} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map">
                <h2>Парки города {CITY.title}:</h2>
                <MapList points={POINTS} onListItemHover={handlePointHover} />
                {/* <Map
                  city={CITY}
                  points={POINTS}
                  selectedPoint={selectedPoint}
                /> */}
                <Map
                  city={selectedCity?.location || CITY}
                  points={selectedCityOffers.map((offer) => ({
                    title: offer.title,
                    lat: offer.location.latitude,
                    lng: offer.location.longitude,
                  }))}
                  selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
