import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Login, User } from '../types/types';


export const fetchLogin = createAsyncThunk<User, Login, {rejectValue: string}>(
  'user/fetchLogin',
  async (user, {rejectWithValue}) => {

    const response = await fetch('https://8.react.pages.academy/six-cities/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),

    });

    if(!response.ok) {
      return rejectWithValue('Login or password is not correct!');
    }

    const data = await response.json() as User;
    localStorage.setItem('user', JSON.stringify(data));

    return data;
  },
);

type UserState = {
  user: User,
  error: string | null,
  loading: boolean,
}


const initialState: UserState = {
  user: {} as User,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // userlocalSt(state) {
    //   const {user} = state;
    //   // eslint-disable-next-line no-console
    //   console.log(user);
    //   localStorage.setItem('user', JSON.stringify(user));
    // },
    removeUser(state) {
      state.user = {} as User;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload;
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

export const {removeUser} = userSlice.actions;

export default userSlice.reducer;
