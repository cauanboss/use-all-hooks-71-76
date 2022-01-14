import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './templates/Home';
import reportWebVitals from './reportWebVitals';
import { CounterContextProvider } from './contexts/CounterContext';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
