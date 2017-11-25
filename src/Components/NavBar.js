import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { indigo800 } from 'material-ui/styles/colors';

const style = {
  navBar: {
    background: indigo800,
    height: 50,
    width: '100vw',
    textAlign: 'left',
    display: 'inline-block',
  },
  navButton: {
    background: indigo800,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
};

class NavBar extends Component {
  render() {
    return (
      <MuiThemeProvider>
          <Paper style={style.navBar} zDepth={2} rounded={false} >
            <Tab label='Home' style={style.navButton} containerElement={<Link to='/'/>}/>
            <Tab label='Showcase' style={style.navButton} containerElement={<Link to='/showcase'/>}/>
            <Tab label='Contact' style={style.navButton} containerElement={<Link to='/contact'/>}/>
          </Paper>
      </MuiThemeProvider>
    );
  }
}

export default NavBar;
