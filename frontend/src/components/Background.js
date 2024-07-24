import React, { Component } from 'react';
import video from "../assets/video/3191573-uhd_3840_2160_25fps.mp4";
import "../styles/Background.css"

export default class Background extends Component {
  render() {
    return (
      <div >
         <video playsInline autoPlay muted loop preload='auto' className="video-background" ><source src={video} type="video/mp4" /></video>

      </div>
    )
  }
}
