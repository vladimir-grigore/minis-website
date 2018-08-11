import React, { Component } from "react"

import DrawerMenu from "../Components/DrawerMenu"


const styles = {
  hero_image: {
    background: "url(./heroImage.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
  },
}

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <DrawerMenu/>
        <div style={styles.hero_image} />
      </div>
    );
  }
}

export default App
