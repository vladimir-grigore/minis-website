import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import emailjs from 'emailjs-com';

class Contact extends Component {
  
  sendEmail = () => {
    // parameters: service_id, template_id, template_parameters
    emailjs.send("mailgun","logo_email",{name: "Vlad", notes: "Check this out!"})
    .then(function(response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
      console.log("FAILED. error=", err);
    });
  }

  render() {
    emailjs.init("user_cpsQu1uDlwzeJYpdIU0oS")
    
    return (
      <MuiThemeProvider>
        <div className="Contact">
          <NavBar />
          <p></p>
          <RaisedButton label="Contact" primary={true} onClick={this.sendEmail} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Contact;
