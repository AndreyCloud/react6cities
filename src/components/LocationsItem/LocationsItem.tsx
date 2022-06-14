import React from 'react';
import { City } from '../../types/types';
import { chooseCity } from '../../store/citySlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';


type LocationsItemProps = {
  city: City
}

function LocationsItem({city}: LocationsItemProps): JSX.Element {

  const town = useAppSelector((state) => state.city.city);

  const dispatch = useAppDispatch();
  const choose = () => dispatch(chooseCity(city.name));

  const ActiveCity = (city1: string, city2: string): string => {
    if (city1 === city2) {
      return 'locations__item-link tabs__item tabs__item--active';
    } return 'locations__item-link tabs__item';
  };

  const classN = ActiveCity (town, city.name);


  return (
    <li onClick={choose} className="locations__item">
      <div className = {classN} >
        <span>{city.name}</span>
      </div>
    </li>
  );
}

export default LocationsItem;
