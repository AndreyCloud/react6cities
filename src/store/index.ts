import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './citySlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    city: cityReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
