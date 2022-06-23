
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
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  name: string;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
export type Cities = City[];


export type Hotel = {
  bedrooms: number,
  city: {
    location: {
      latitude: number,
      longitude: number,
      zoom: number
    },
    name: string
  },
  description: string,
  goods: Array<string>,
  host: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string
  },
  id: number,
  images: Array<string>,
  is_favorite: boolean,
  is_premium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number
  },
  max_adults: number,
  preview_image: string,
  price: number,
  rating: number,
  title: string,
  type: string
};

export type Hotels = Hotel[];

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    avatar_url: string;
    id: number;
    isPro: boolean;
    name: string;
  };
};

export type Comments = Comment[];

export type User = {
  avatar_url: string | null,
  email: string | null,
  id: number | null,
  is_pro: boolean | null,
  name: string | null,
  token: string | null,
}

export type Login = {
  email: string;
  password: string;
}
