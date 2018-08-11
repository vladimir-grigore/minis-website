import React, { Component } from "react"
import { Button, Drawer, Icon } from "@material-ui/core"
import styles from "./styles.js"

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
      <div style={styles.drawerContainer}>
        <Button variant="outlined" onClick={this.toggleDrawer(true)} style={styles.drawerButton}>
          <Icon>menu</Icon>
        </Button>
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