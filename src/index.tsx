import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//mport HelloWorld from './HelloWorld';
//import Events from './events/Events';
//import ConditionalsIfElse from './events/ConditionalsIfElse';
//import SwitchCase from './events/SwitchCase';
import MapExample from './events/MapExample';

ReactDOM.render(
  <React.StrictMode>
    <MapExample/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
