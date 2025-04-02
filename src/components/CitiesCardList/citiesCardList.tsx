// Компонент должен отрисовывать все карточки с предложениями аренды с помощью компонента «Карточка предложения». Все необходимые данные компонент принимает через props.

import { OffersList } from "../../types/offer";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
  offersList: OffersList[];
};

function CitiesCardList({ offersList }: CitiesCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from(offersList, (item) => (
        <CitiesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          previewImage={item.previewImage}
          isPrimium={item.isPrimium}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
export { CitiesCardList };
