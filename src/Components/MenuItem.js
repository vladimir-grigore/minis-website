import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

import styles from "./styles"

export default class MenuItem extends Component {
  render() {
    const { menuName, link } = this.props

    return (
      <div>
        <Button style={styles.buttonContainer} component={Link} to={link}>
          <div style={styles.link}>{menuName}</div>
        </Button>
      </div>
    )
  }
}