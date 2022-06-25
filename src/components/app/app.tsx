import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/useApps';
import { useAuth } from '../../hooks/useAuth';
import { fetchHotels } from '../../store/citySlice';
import { Cities } from '../../types/types';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Offer from '../Offer/Offer';

type AppProps = {
  cities: Cities;
}

function App({cities}: AppProps): JSX.Element {

  const auth = useAuth().isAuth;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchHotels(''));
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element= {<Main cities={cities}/>}/>
      <Route path="/favorites" element= {auth ? <Favorites /> : <Login/>}/>
      <Route path="/login" element= {auth ? <Main cities={cities}/> : <Login />}/>
      <Route path="/offer/:id" element= {<Offer />}/>
      <Route path="*" element= {<ErrorPage />}/>
    </Routes>
  );
}

export default App;
