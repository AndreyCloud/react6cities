import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { places, reviews } from './mocks/offers';

const numberOffers = 412;
const auth = true;

ReactDOM.render(
  <BrowserRouter>
    <App numberOffers={numberOffers} auth={auth} places={places} reviews={reviews}/>
  </BrowserRouter>,
  document.getElementById('root'));
