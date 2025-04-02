//  опишем 2 действия: изменение города и заполнение списка предложений по аренде
import { createAction } from "@reduxjs/toolkit";
import { CityOffer, OffersList } from "../types/offer";
import { offers } from "../mocks/offers";

const changeCity = createAction("offers/changeCity", (city: CityOffer) => ({
  payload: city,
}));
const offersCityList = createAction(
  "offers/offersCityList",
  (offers: OffersList[]) => ({ payload: offers })
);
export { changeCity, offersCityList };
