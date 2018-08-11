import React, { Component } from "react"

import DrawerMenu from "../Components/DrawerMenu"


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
        <DrawerMenu />
        <div style={style.hero_image} />
      </div>
    );
  }
}

export default App
