import { useAppSelector } from './useApps';

export function useAuth() {

  const {avatarUrl, email, id, isPro, name, token} = useAppSelector((state) => state.user);

  return {
    isAuth: !!token,
    avatarUrl,
    email,
    id,
    isPro,
    name,
  };
}
