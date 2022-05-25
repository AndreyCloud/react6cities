import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Offer from '../Offer/Offer';

type ArrPlaces = {
  id: number;
  name: string;
  mark: string;
  img: string;
  price: number;
  priceText: string;
  type: string;
}[];

type AppProps = {
  numberOffers: number;
  privat: JSX.Element;
  places: ArrPlaces;
}

function App({privat, numberOffers, places}: AppProps): JSX.Element {

  return (
    <Routes>
      <Route path="/" element= {<Main numberOffers={numberOffers} places={places} />}/>
      <Route path="/favorites" element= {privat}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/offer/:id" element= {<Offer />}/>
      <Route path="*" element= {<ErrorPage />}/>
    </Routes>
  );
}

export default App;
