import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import PublicRoutes from './components/Routes/PublicRoutes/PublicRoutes';

import history from './utils/history';
import { Router } from 'react-router-dom';
class App extends Component {

  render(){
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          <PublicRoutes />
        </Router>
      </div>
    );
  }
  
}

export default App;
