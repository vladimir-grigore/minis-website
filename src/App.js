import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import "./App.css";
import NavBar from "./Components/NavBar";


const style = {
  hero_image: {
    background: "url(./heroImage.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Paper style={style.hero_image} zDepth={1} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
