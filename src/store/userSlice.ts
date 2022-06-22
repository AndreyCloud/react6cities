import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/types';


const initialState: User = {
  avatarUrl: null,
  email: null,
  id: null,
  isPro: null,
  name: null,
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.avatarUrl = action.payload.avatar_url;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isPro = action.payload.is_pro;
      state.name = action.payload.name;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.avatarUrl = null;
      state.email = null;
      state.id = null;
      state.isPro = null;
      state.name = null;
      state.token = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
