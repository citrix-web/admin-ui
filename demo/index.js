import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../scripts/store/configureStore';
import App from '../scripts/containers/App';
import '../sass/index.scss';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('admin-center-form')
);
