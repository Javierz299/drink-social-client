import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReduxRoot from './reduxRoot/reduxRoot';
ReactDOM.render(
  <React.StrictMode>
    <ReduxRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxRoot>
  </React.StrictMode>,
  document.getElementById('root')
);


