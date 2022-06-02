import { ArrPlaces, ArrReviews } from '../types/types';


export const places: ArrPlaces = [
  {
    id: 1,
    name: 'Beautiful &amp; luxurious apartment at great location',
    mark: 'Premium',
    img: 'img/apartment-01.jpg',
    price: 120,
    priceText: 'night',
    type: 'Apartment',
    favorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: 'Amsterdam',
      },
    },
  },
  {
    id: 2,
    name: 'Wood and stone place',
    mark: '',
    img: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    type: 'Private room',
    favorite: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: 'Amsterdam',
      },
    },
  },
  {
    id: 3,
    name: 'Canal View Prinsengracht',
    mark: 'Premium',
    img: 'img/apartment-02.jpg',
    price: 132,
    priceText: 'night',
    type: 'Apartment',
    favorite: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: 'Amsterdam',
      },
    },
  },
  {
    id: 4,
    name: 'Nice, cozy, warm big bed apartment',
    mark: 'Premium',
    img: 'img/apartment-03.jpg',
    price: 180,
    priceText: 'night',
    type: 'Apartment',
    favorite: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8,
      city: {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 10,
        },
        name: 'Amsterdam',
      },
    },
  },
];

export const reviews: ArrReviews = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-09T14:13:56.569Z',
    id: 3,
    rating: 3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'Max',
    },
  },
];
