import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

class Showcase extends Component {
  render() {
    return (
        <div className="Showcase">
          <p className="App-intro"></p>
          <Button variant="outlined" color="primary" component={Link} to={"/"}>
            Home
          </Button>
        </div>
    );
  }
}

export default Showcase
