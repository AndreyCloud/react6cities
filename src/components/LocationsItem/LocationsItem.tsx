import React from 'react';
import { City } from '../../types/types';
import { chooseCity } from '../../store/citySlice';
import { useDispatch } from 'react-redux';

type LocationsItemProps = {
  city: City
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {

  const dispatch = useDispatch();
  const choose = () => dispatch(chooseCity({city}));

  return (
    <li onClick={choose} className="locations__item">
      <div className="locations__item-link tabs__item" >
        <span>{city.name}</span>
      </div>
    </li>
  );
}

export default LocationsItem;
