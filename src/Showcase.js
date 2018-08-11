import React, { Component } from "react";
import NavBar from "./Components/NavBar";

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

class Showcase extends Component {
  render() {
    return (
        <div className="Showcase">
          <NavBar />
          <p className="App-intro"></p>
          <Button label="Showcase" primary={true} component={Link} to={"/"}/>
        </div>
    );
  }
}

export default Showcase;
