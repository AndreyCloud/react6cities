import { useMemo } from 'react';
// import { Hotels } from '../types/types';


export const useSorted = (hotels: number[], sort: number) => {
  const sortedHotels = useMemo(() => {
    if (sort) {
      return [...hotels].sort((a, b) => a - b);
    }
    return hotels;
  }, [sort, hotels]);

  return sortedHotels;
};
