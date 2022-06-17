import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotels } from '../types/types';

type Town = string;

type CitiesState = {
  city: Town;
  hotels: Hotels;
  hotelsCity: Hotels;
  hotelsNearby: Hotels;
  loading: boolean;
  error: string | null;
}

const initialState: CitiesState = {
  city: 'Paris',
  hotels: [],
  hotelsCity: [],
  hotelsNearby: [],
  loading: false,
  error: null,
};

export const fetchHotels = createAsyncThunk<Hotels, unknown, {rejectValue: string}>(
  'cities/fetchHotels',
  async (_, {rejectWithValue}) => {
    const response = await fetch(' https://8.react.pages.academy/six-cities/hotels');

    if(!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = await response.json();

    return data;
  },
);

export const fetchHotelsNearby = createAsyncThunk<Hotels, string, {rejectValue: string}>(
  'cities/fetchHotelsNearby',
  async (id, {rejectWithValue}) => {
    const response = await fetch(`https://8.react.pages.academy/six-cities/hotels/${id}/nearby`);

    if(!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = await response.json();

    return data;
  },
);

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    chooseCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
      state.hotelsCity = state.hotels.filter( (v) => v.city.name === state.city);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotels.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotels.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.loading = false;
        state.hotelsCity = state.hotels.filter( (v) => v.city.name === state.city);
      })

      .addCase(fetchHotelsNearby.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelsNearby.fulfilled, (state, action) => {
        state.hotelsNearby = action.payload;
        state.loading = false;
        // state.hotelsNearby = state.hotels.filter( (v) => v.city.name === state.city);
      })

      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

function isError (action: AnyAction) {
  return action.type.endsWith('rejected');
}

export const {chooseCity} = citySlice.actions;

export default citySlice.reducer;
