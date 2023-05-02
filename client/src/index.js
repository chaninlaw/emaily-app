import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk';

import App from './App';
import reducers from './reducers';
// Temporary
import axios from 'axios';
window.axios = axios;

const root = createRoot(document.getElementById('root'));
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);