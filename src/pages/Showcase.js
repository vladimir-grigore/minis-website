import React, { Component } from "react"
import Gallery from "react-photo-gallery"
import Lightbox from "react-images"

import DrawerMenu from "../Components/DrawerMenu"
import photoSet from "./PhotoSet"

class Showcase extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
  }
  openLightbox = (event, obj) => {
    console.log(obj)
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
        <div style={{ backgroundColor: "black" }}>
          <DrawerMenu />
          <Gallery photos={photoSet} columns={3} direction="row" onClick={this.openLightbox} />
          <Lightbox images={photoSet}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
        </div>
    );
  }
}

export default Showcase
