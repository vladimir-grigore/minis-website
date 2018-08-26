import React, { Component } from "react"

import MenuItem from "./MenuItem"

export default class DrawerMenuItems extends Component {
  render() {
    return (
      <div>
        <MenuItem link="/" menuName="Home" />
        <MenuItem link="/showcase" menuName="Showcase" />
        <MenuItem link="/contact" menuName="Contact" />
      </div>
    )
  }
}