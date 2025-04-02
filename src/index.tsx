import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { Setting } from "./const";
import { offers } from "./mocks/offers";
import { offersList } from "./mocks/offers-list";
import { reviews } from "./mocks/reviews";
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App
      rentalOffersCount={Setting.rentalOffersCount}
      offersList={offersList}
      offers={offers}
    />
    </Provider>
  </React.StrictMode>
);
