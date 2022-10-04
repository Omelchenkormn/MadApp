import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux/';
import { store } from 'redux/store';
import './fireBase';
import { PersistGate } from 'redux-persist/es/integration/react'
import {persistor} from 'redux/store'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
