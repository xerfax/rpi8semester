// OfferLocation - описывает расположение жилья
type OfferLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};

// CityOffer - описывает город и его координаты
export type CityOffer = {
    name: string;
    location: OfferLocation;
};

// HostOffer - описывает хозяина жилья.
type HostOffer = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
};


// Затем создадим тип FullOffer, который представляет собой полное описание жилья. 
export type FullOffer = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPrimium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    host: HostOffer;
    images: string[];
    maxAdults: number;
    previewImage: string;
};

export type OffersList = {
    id: string;
    title: string;
    type: string;
    price: number;
    city: CityOffer;
    location: OfferLocation;
    isFavorite: boolean;
    isPrimium: boolean;
    rating: number;
    previewImage: string;
};