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
        <div>
          <NavBar />
          <img src='./heroImage.jpg' alt='' style={style.hero_image}></img>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
