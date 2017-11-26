import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  hero_image: {
    width: '100vw',
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <img src='HeroImage.jpg' alt='' style={style.hero_image}></img>
      </MuiThemeProvider>
    );
  }
}

export default App;
