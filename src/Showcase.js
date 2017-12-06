import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Showcase extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="Showcase">
          <NavBar />
          <p className="App-intro"></p>
          <RaisedButton label="Showcase" primary={true} containerElement={<Link to='/'/>}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Showcase;
