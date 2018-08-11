import React, { Component } from "react"
import Button from "@material-ui/core/Button"
// import { Link } from "react-router-dom"
import emailjs from "emailjs-com"

import DrawerMenu from "../Components/DrawerMenu"

const style = {
  hero_image: {
    background: "url(./heroImage.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
  },
  contact_button: {
    marginTop: 20,
    position: "absolute",
    top: 100,
    left: 100,
  }
}
class Contact extends Component {
  
  sendEmail = () => {
    // parameters: service_id, template_id, template_parameters
    emailjs.send("mailgun","template_1",{name: "Vlad", notes: "Check this out!"})
    .then(function(response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text)
    }, function(err) {
      console.log("FAILED. error=", err)
    })
  }

  render() {
    emailjs.init("user_S5kSqRfXGy6JWJ9I7xwre")
    
    return (
      <div>
        <DrawerMenu />
        <Button className="contact_button" 
                label="Contact" 
                variant="outlined" 
                color="primary"
                onClick={this.sendEmail} 
                style={style.contact_button}
        >
          Send mail
        </Button>
        <div style={style.hero_image} />  
      </div>
    );
  }
}

export default Contact
