import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotels } from '../types/types';

type Town = string;

type CitiesState = {
  city: Town;
  hotels: Hotels;
  loading: boolean;
  error: string | null;
}

const initialState: CitiesState = {
  city: 'Paris',
  hotels: [],
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

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    chooseCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
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
