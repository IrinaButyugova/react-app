import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createRoot } from 'react-dom/client';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({reducer:reducers,
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(sagas);
const reactRoot = createRoot(document.getElementById('root'));
reactRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
)
