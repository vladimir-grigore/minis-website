import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Contact extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Contact">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Contact Page</h1>
          </header>
          <p className="App-intro">
          </p>
          <RaisedButton label="Contact" primary={true} containerElement={<Link to='/'/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
