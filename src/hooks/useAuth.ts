import { useAppSelector } from './useApps';

export function useAuth() {

  const {token} = useAppSelector((state) => state.user.user);

  return {
    isAuth: !!token,
  };
}
