import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import PublicRoutes from './components/Routes/PublicRoutes/PublicRoutes'
class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <PublicRoutes />
      </div>
    );
  }
  
}

export default App;
