import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { cities, places, reviews } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store/store';


const numberOffers = 412;
const auth = true;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App numberOffers={numberOffers} auth={auth} places={places} reviews={reviews} cities={cities}/>
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root'));
