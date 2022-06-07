import React from 'react';
import { City } from '../../types/types';

type LocationsItemProps = {
  city: City
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city.name}</span>
      </a>
    </li>
  );
}

export default LocationsItem;
