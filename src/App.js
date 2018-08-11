import React, { Component } from "react";

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
      <div style={{ textAlign: "center" }}>
        <NavBar />
        <div style={style.hero_image} zDepth={1} />
      </div>
    );
  }
}

export default App;
