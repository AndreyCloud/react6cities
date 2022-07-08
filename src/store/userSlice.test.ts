import { User } from '../types/types';
import userSlice, { userlocalStDelete } from './userSlice';

type UserState = {
  token: string,
  user: User,
  error: string | null,
  loadingUser: boolean,
}

const inState: UserState = {
  token: '',
  user: {} as User,
  error: null,
  loadingUser: false,
};

describe ('userSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = userSlice(undefined, {type:''});
    expect(result).toEqual(inState);
  });

  it('should be clearing the local storage "userlocalStDelete" action', () => {
    const action = {type: userlocalStDelete.type};
    localStorage.setItem('user', '155');
    inState.token = '155';

    const result = userSlice(inState, action);

    expect(result.token).toBe('');
    expect(localStorage.getItem('user')).toBe(null);
  });
});
