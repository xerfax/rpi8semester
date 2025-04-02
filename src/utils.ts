import { SortOffersType } from "./const";
import { CityOffer, OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";

const getCity = (cityName: string, cities: CityOffer[]): CityOffer | undefined => {
  return cities.find((city) => city.name === cityName);
};
export { getCity, sortOffersByType };

// function sortOffersByType (offers: OffersList[], type: SortOffer): OffersList[] {
//     switch(type) {
//         case SortOffersType.PriceToHight:
//             return offers.sort((a, b) => a.price - b.price);
//         case SortOffersType.PriceToLow:
//             return offers.sort((a, b) => b.price - a.price);
//         case SortOffersType.TopRated:
//             return offers.sort((a, b) => b.rating - a.rating);
//         default:
//             return offers;    
//     }
// }

function sortOffersByType(offers: OffersList[], type: SortOffer): OffersList[] {
    const sortedOffers = [...offers]; // Создаем копию массива перед сортировкой
    switch(type) {
      case SortOffersType.PriceToHight:
        return sortedOffers.sort((a, b) => a.price - b.price);
      case SortOffersType.PriceToLow:
        return sortedOffers.sort((a, b) => b.price - a.price);
      case SortOffersType.TopRated:
        return sortedOffers.sort((a, b) => b.rating - a.rating);
      default:
        return sortedOffers;
    }
  }
  