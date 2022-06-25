import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { cities } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './store';
import { createRoot } from 'react-dom/client';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App
        cities={cities}
      />
    </BrowserRouter>
  </Provider>,
);
