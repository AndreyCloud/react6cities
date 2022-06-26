import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comments, Hotel, Hotels } from '../types/types';

type Town = string;

type CitiesState = {
  city: Town;
  hotels: Hotels;
  hotelsCity: Hotels;
  hotelsNearby: Hotels;
  comments: Comments;
  sort: string | null;
  loading: boolean;
  error: string | null;
  favorite:Hotels,
}

const initialState: CitiesState = {
  city: 'Paris',
  hotels: [],
  hotelsCity: [],
  hotelsNearby: [],
  comments: [],
  favorite: [],
  sort: null,
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
    const response: Response = await fetch(`https://8.react.pages.academy/six-cities/hotels/${id}/nearby`);

    if(!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = await response.json();

    return data;
  },
);
export const fetchHotelComments = createAsyncThunk<Comments, string, {rejectValue: string}>(
  'cities/fetchHotelComments',
  async (id, {rejectWithValue}) => {
    const response = await fetch(`https://8.react.pages.academy/six-cities/comments/${id}`);

    if(!response.ok) {
      return rejectWithValue('Server Error!');
    }

    const data = await response.json();

    return data;
  },
);

export const fetchFavorite = createAsyncThunk<Hotels, string, {rejectValue: string}>(
  'user/fetchFavorite',
  async (token, {rejectWithValue}) => {

    const response = await fetch('https://8.react.pages.academy/six-cities/favorite', {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token,
      },
    });

    if(!response.ok) {
      return rejectWithValue('Authorization failed, please return to the home page!');
    }

    const data = await response.json();

    return data;
  },
);

type IdToken = {
  id: string,
  token: string,
}

export const fetchFavoriteChange = createAsyncThunk<Hotel, IdToken, {rejectValue: string}>(
  'user/fetchFavoriteChange',
  async (idToken, {rejectWithValue}) => {

    const {id, token} = idToken;

    const response = await fetch(`https://8.react.pages.academy/six-cities/favorite/${id}/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token,
      },
    });

    if(!response.ok) {
      return rejectWithValue('Authorization failed!');
    }

    const data = await response.json();

    return data;
  },
);
export const fetchFavoriteDelete = createAsyncThunk<Hotel, IdToken, {rejectValue: string}>(
  'user/fetchFavoriteDelete',
  async (idToken, {rejectWithValue}) => {

    const {id, token} = idToken;

    const response = await fetch(`https://8.react.pages.academy/six-cities/favorite/${id}/0`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Token': token,
      },
    });

    if(!response.ok) {
      return rejectWithValue('Authorization failed!');
    }

    const data = await response.json() as Hotel;

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
    selectSort(state,action) {
      state.sort = action.payload;
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
        state.hotelsNearby = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelsNearby.fulfilled, (state, action) => {
        state.hotelsNearby = action.payload;
        state.loading = false;
      })
      .addCase(fetchHotelComments.pending, (state) => {
        state.comments = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHotelComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(fetchFavorite.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.favorite.forEach((favorit) => {
          state.hotels = state.hotels.map((elem) => elem.id !== favorit.id ? elem : favorit);
        });
        state.hotelsCity = state.hotels.filter( (v) => v.city.name === state.city);
        state.loading = false;
      })
      .addCase(fetchFavoriteChange.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteChange.fulfilled, (state, action) => {
        const hotel = action.payload;
        const hotels = state.favorite;
        hotels.push(hotel);
        state.hotels = state.hotels.map((elem) => elem.id !== hotel.id ? elem : hotel);
        state.hotelsCity = state.hotels.filter( (v) => v.city.name === state.city);
        state.loading = false;
      })
      .addCase(fetchFavoriteDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavoriteDelete.fulfilled, (state, action) => {
        const hotel = action.payload;
        const hotels = state.favorite;
        hotels.filter((item) => item.id !== hotel.id);
        state.hotels = state.hotels.map((elem) => elem.id !== hotel.id ? elem : hotel);
        state.hotelsCity = state.hotels.filter( (v) => v.city.name === state.city);
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

export const {chooseCity, selectSort} = citySlice.actions;

export default citySlice.reducer;
