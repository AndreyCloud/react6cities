import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import Favorites from './components/Favorites/Favorites';
import Login from './components/Login/Login';
import { places } from './mocks/offers';

const numberOffers = 412;
const auth = true;
const privat = auth ? <Favorites/> : <Login/> ;

ReactDOM.render(
  <BrowserRouter>
    <App numberOffers={numberOffers} privat={privat} places={places}/>
  </BrowserRouter>,
  document.getElementById('root'));
