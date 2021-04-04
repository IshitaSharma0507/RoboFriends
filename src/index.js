import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import './index.css'
// import { Robots } from './Robots.js';

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics e ndpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
