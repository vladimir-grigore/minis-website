import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Showcase extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <div className="Showcase">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Showcase Page</h1>
          </header>
          <p className="App-intro">
          </p>
          <RaisedButton label="Showcase" primary={true} containerElement={<Link to='/'/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Showcase;
