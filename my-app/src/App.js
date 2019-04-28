import React, { Component } from 'react';
// import {Router} from 'react-redux'
import {BrowserRouter,Router } from 'react-router-dom'
import RootRouter from './routes.js'
import { createBrowserHistory } from "history";


const customHistory = createBrowserHistory();

// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render(){

    return (
      <div className="App">
      <Router history={customHistory}>
      <RootRouter/>
      </Router>
    
      </div>
    );
  }
}
export default App;
