import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Vlad's Minis</h1>
          </header>
          <p className="App-intro">
          </p>
          <RaisedButton label="Contact us" primary={true} containerElement={<Link to='/contact'/>}/>
          <RaisedButton label="Showcase" primary={true} containerElement={<Link to='/showcase'/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
