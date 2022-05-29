import { Route, Routes } from 'react-router-dom';
import { ArrPlaces } from '../../types/types';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Offer from '../Offer/Offer';

type AppProps = {
  numberOffers: number;
  auth: boolean;
  places: ArrPlaces;
}

function App({auth, numberOffers, places}: AppProps): JSX.Element {

  return (
    <Routes>
      <Route path="/" element= {<Main numberOffers={numberOffers} places={places} />}/>
      <Route path="/favorites" element= {auth ? <Favorites places={places}/> : <Login/>}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/offer/:id" element= {<Offer places={places} />}/>
      <Route path="*" element= {<ErrorPage />}/>
    </Routes>
  );
}

export default App;
