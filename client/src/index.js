import React from 'react';
import ReactDOM from 'react-dom';
import Register from './components/Auth/Register';
import {Provider} from "react-redux";
import store from "./store/store";


ReactDOM.render(
  <Provider store={store}>

<Register />

  </Provider>
    
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

