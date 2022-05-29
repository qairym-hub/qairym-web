import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/globals.scss'
import persistStore from 'redux-persist/es/persistStore';
import store from './services/store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
