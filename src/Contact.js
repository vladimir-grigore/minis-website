import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Contact extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Contact">
          <NavBar />
          <p></p>
          <RaisedButton label="Contact" primary={true} containerElement={<Link to='/'/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
