import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.scss'
import Provider from './store/store'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.querySelector('#root'),
)
