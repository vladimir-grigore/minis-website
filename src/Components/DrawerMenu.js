import React, { Component } from "react"
import Drawer from "@material-ui/core/Drawer"
import Button from "@material-ui/core/Button"
// import { Link } from "react-router-dom";

import MenuItems from "./MenuItems"

export default class DrawerMenu extends Component {
  state = {
    isOpen: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({ isOpen: open })
  }

  render() {
    return(
      <div>
        <Button onClick={this.toggleDrawer(true)}>Menu</Button>
        <Drawer open={this.state.isOpen} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <MenuItems />
          </div>
        </Drawer>
      </div>
    )
  }
}