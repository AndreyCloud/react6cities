import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { places } from './mocks/offers';

const numberOffers = 412;
const auth = true;

ReactDOM.render(
  <BrowserRouter>
    <App numberOffers={numberOffers} auth={auth} places={places}/>
  </BrowserRouter>,
  document.getElementById('root'));
