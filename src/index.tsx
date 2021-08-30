import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss'
import Provider from "./redux/store";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
