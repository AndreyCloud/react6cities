type locationCity = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type ArrPlaces = {
  id: number;
  name: string;
  mark: string;
  img: string;
  price: number;
  priceText: string;
  type: string;
  favorite: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    city: City;
  };
}[];

export type ArrReviews = Review[];

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type City = {
  location: locationCity;
  name: string;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
