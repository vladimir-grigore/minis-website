import React, { Component } from "react"
import { List, ListItem, ListItemText, Icon, Divider } from "@material-ui/core"
import { Link } from "react-router-dom"

export default class MenuItems extends Component {
  render(){
    return(
      <List>
        <ListItem button component={Link} to="/">
          <Icon>home</Icon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider/>
        <ListItem button component={Link} to="/showcase">
          <Icon>collections</Icon>
          <MenuItemText name="Showcase"/>
        </ListItem>
        <Divider/>
        <ListItem button component={Link} to="/contact">
          <Icon>email</Icon>
          <ListItemText primary="Contact" />
        </ListItem>
        <Divider/>
      </List>
    )
  }
}

function MenuItemText({ name }) {
  return(
    <div>
      <ListItemText primary={name} disableTypography="true" style={{ color: "#333"}}/>
    </div>
  )
}
