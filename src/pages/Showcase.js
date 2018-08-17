import React, { Component } from "react"
import Gallery from "react-photo-gallery"

import DrawerMenu from "../Components/DrawerMenu"

const PHOTO_SET = [
  {
    src: "https://www.miniaturemarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/v/cvb280167-0476.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "http://i.imgur.com/0PLwJ.png",
    width: 4,
    height: 3,
  },
  {
    src: "https://www.miniaturemarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/v/cvb280120-0113_2.jpg",
    width: 1,
    height: 1,
  },
]
class Showcase extends Component {
  render() {
    return (
        <div>
          <DrawerMenu />
          <Gallery photos={PHOTO_SET} columns="2" direction="column" />
        </div>
    );
  }
}

export default Showcase
