import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter}  from "react-router-dom";

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import productsReducer from "./components/store/reducer/productsReducer";
import cartReducer from "./components/store/reducer/cartReduxer";

import {loadState, saveState} from "./components/store/localStorage/localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productsReducer: productsReducer,
  cartReducer: cartReducer
});

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  saveState(store.getState())
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store} >
        <App />
      </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
