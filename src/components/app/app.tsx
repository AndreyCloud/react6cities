import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import Favorites from '../Favorites/Favorites';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Offer from '../Offer/Offer';

function App(): JSX.Element {
  const numberOffers = 112;
  const auth = false;
  const privat = auth ? <Favorites/> : <Login/> ;

  return (
    <Routes>
      <Route path="/" element= {<Main numberOffers={numberOffers} />}/>
      <Route path="/favorites" element= {privat}/>
      <Route path="/login" element= {<Login />}/>
      <Route path="/offer/:id" element= {<Offer />}/>
      <Route path="*" element= {<ErrorPage />}/>
    </Routes>
  );
}

export default App;
