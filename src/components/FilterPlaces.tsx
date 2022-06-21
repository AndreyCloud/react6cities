import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/useApps';
import { selectSort } from '../store/citySlice';
// import { useAppSelector } from '../hooks/useApps';


function FilterPlaces() {

  const [filterClass, setFilterClass] = useState('places__options places__options--custom');
  const [valueSort, setValueSort] = useState('Popular');

  const dispatch = useAppDispatch();

  const selectedFilter = ()=> {
    setFilterClass('places__options places__options--custom places__options--opened');
  };
  const chValueSort = (value: string)=> {
    setValueSort(value);
    setFilterClass('places__options places__options--custom');
    if( value === ' Price: low to high') {
      dispatch(selectSort('price'));
    }
    if (value === ' Price: high to low') {
      dispatch(selectSort('-price'));
    }
    if (value === ' Top rated first') {
      dispatch(selectSort('rating'));
    }

  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={() => selectedFilter()} className="places__sorting-type" tabIndex={0}>
        {valueSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={filterClass}>
        <li className="places__option places__option--active" tabIndex={0}>Popular</li>
        <li onClick={() => chValueSort(' Price: low to high')} className="places__option" tabIndex={5}>Price: low to high</li>
        <li onClick={() => chValueSort(' Price: high to low')} className="places__option" tabIndex={0}>Price: high to low</li>
        <li onClick={() => chValueSort(' Top rated first')} className="places__option" tabIndex={0}>Top rated first</li>
      </ul>
    </form>
  );
}

export default FilterPlaces;
