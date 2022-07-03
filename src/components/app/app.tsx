import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApps';
import { useAuth } from '../../hooks/useAuth';
import { fetchFavorite, fetchHotels } from '../../store/citySlice';
import { fetchLoginToken } from '../../store/userSlice';
import { Cities } from '../../types/types';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import FavoritesEmpty from '../Favorites/FavoritesEmpty';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Offer from '../Offer/Offer';

type AppProps = {
  cities: Cities;
}

function App({cities}: AppProps): JSX.Element {

  const auth = useAuth().isAuth;
  const token = useAppSelector((state) => state.user.user.token);
  const favorites = useAppSelector((state) => state.city.favorite);
  const favorPab = (favorites.length === 0) ? <FavoritesEmpty/> : <Favorites/>;
  const tokenLogin = localStorage.getItem('user');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!auth) {
      dispatch(fetchHotels(''));
    }
    if (tokenLogin !== null) {
      dispatch(fetchLoginToken(tokenLogin));
    }
  }, []);

  useEffect(() => {
    if(auth) {
      dispatch(fetchFavorite(token));
    }
  }, [auth]);

  return (
    <Routes>
      <Route path="/" element= {<Main cities={cities}/>}/>
      <Route path="/favorites" element= {auth ? favorPab : <Login/>}/>
      <Route path="/login" element= {auth ? <Main cities={cities}/> : <Login />}/>
      <Route path="/offer/:id" element= {<Offer />}/>
      <Route path="*" element= {<ErrorPage />}/>
    </Routes>
  );
}

export default App;
