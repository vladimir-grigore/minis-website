import React, { Component } from "react"
import { Button, Drawer, Icon } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"

import styles from "./styles.js"
import DrawerMenuItems from "./DrawerMenuItems"

class DrawerMenu extends Component {
  state = {
    isOpen: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({ isOpen: open })
  }

  render() {
    const { classes } = this.props
    return(
      <div style={styles.drawerContainer}>
        <Button variant="outlined" 
          onClick={this.toggleDrawer(true)} 
          style={styles.drawerButton}>
          <Icon>menu</Icon>
        </Button>
        <Drawer
          open={this.state.isOpen} 
          onClose={this.toggleDrawer(false)}
          classes={{ paper: classes.drawer }}
          >
          <div tabIndex={0} role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <DrawerMenuItems />
          </div>
        </Drawer>
      </div>
    )
  }
}

export default withStyles(styles)(DrawerMenu)
