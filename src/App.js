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
        <div id="background-wrap">
    <div class="bubble x1"></div>
    <div class="bubble x2"></div>
    <div class="bubble x3"></div>
    <div class="bubble x4"></div>
    <div class="bubble x5"></div>
    <div class="bubble x6"></div>
    <div class="bubble x7"></div>
    <div class="bubble x8"></div>
    <div class="bubble x9"></div>
    <div class="bubble x10"></div>
</div>
      </div>
    );
  }
  
}

export default App;
