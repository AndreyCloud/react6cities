import { createSlice } from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'cities',
  initialState: {
    city: 'Paris',
    reviews: [],
  },
  reducers: {
    chooseCity(state, action) {
      state.city = action.payload.city.name;
    },
  },
});

export const {chooseCity} = citySlice.actions;

export default citySlice.reducer;
