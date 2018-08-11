import React, { Component } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import { Link } from "react-router-dom"

export default class MenuItems extends Component {
  render(){
    return(
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <Divider/>
        <ListItem button component={Link} to="/showcase">
          <ListItemText primary="Showcase" />
        </ListItem>
        <Divider/>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    )
  }
}