import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { cities, places, reviews } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';

const numberOffers = 412;
const auth = true;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App
        numberOffers={numberOffers}
        auth={auth}
        places={places}
        reviews={reviews}
        cities={cities}
      />
    </BrowserRouter>
  </Provider>,
);
