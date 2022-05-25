type ArrPlaces = {
    id: number;
    name: string;
    mark: string;
    img: string;
    price: number;
    priceText: string;
    type: string;
}[];


export const places: ArrPlaces = [
  {
    id: 1,
    name:'Beautiful &amp; luxurious apartment at great location',
    mark: 'Premium',
    img: 'img/apartment-01.jpg',
    price: 120,
    priceText: 'night',
    type: 'Apartment',
  },
  {
    id: 2,
    name:'Wood and stone place',
    mark: 'Premium',
    img: 'img/room.jpg',
    price: 80,
    priceText: 'night',
    type: 'Private room',
  },
  {
    id: 3,
    name:'Canal View Prinsengracht',
    mark: 'Premium',
    img: 'img/apartment-02.jpg',
    price: 132,
    priceText: 'night',
    type: 'Apartment',
  },
  {
    id: 4,
    name:'Nice, cozy, warm big bed apartment',
    mark: 'Premium',
    img: 'img/apartment-03.jpg',
    price: 180,
    priceText: 'night',
    type: 'Apartment',
  },
];
