import React, { Component } from "react";

import { Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const style = {
  navBar: {
    background: "#ABCDEF",
    height: 50,
    width: "100vw",
    textAlign: "left",
    display: "inline-block",
  },
  navButton: {
    background: "#ABCDEF",
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
  },
};

class NavBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div style={style.navBar} zdepth={2} >
        <Tabs value={this.state.value} onChange={this.handleChange}>
          <Tab 
            label="Home" 
            style={style.navButton} 
            component={Link} 
            to={"/"}
          />
          <Tab 
            label="Showcase" 
            style={style.navButton} 
            component={Link} 
            to={"/showcase"}
          />
          <Tab 
            label="Contact" 
            style={style.navButton} 
            component={Link} 
            to={"/contact"}
          />
        </Tabs>
      </div>
    );
  }
}

export default NavBar;
