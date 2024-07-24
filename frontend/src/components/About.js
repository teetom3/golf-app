import React, { Component } from 'react'
import "../styles/welcome.css"
import image1 from "../assets/aboutimages/IMG-20200408-WA0019.jpg";
import image2 from "../assets/aboutimages/P1000033.JPG";
import image3 from "../assets/aboutimages/IMG-20200408-WA0022.jpg";
import image4 from "../assets/aboutimages/IMG_20200513_113235.jpg";


export default class About extends Component {
  render() {
    return (
      <div className='content'>

<div class="hero-container">
  <div class="hero-content">
    <h1 class="hero-title">A propos de moi </h1>
    
    <p class="hero-description">
    Golfeur depuis l'âge de 7 ans et compétiteur dans l'âme , j'ai commencé au golf de Champlong, situé dans la Loire proche de Roanne.<br/>
     Champion de la Loire à plusieurs reprises, j'ai participé aux qualifications pour les championnats de France. <br/>
​

Riche d'un parcours professionnel dans le domaine commercial, rattrapé par l'amour de ce sport et désireux de transmettre ma passion à chacun d'entre vous,
J'ai joué sur de nombreux golf. <br/>
 je me suis donc redirigé vers un Brevet d'état afin d'enseigner . 

    </p>
    <a href="/login" class="hero-button">Réservez votre cours aujourd'hui</a>
  </div>

  <div className="about-container">
      <div className="image-grid">
        <img src={image1} alt="Description 1" className="grid-image" />
        <img src={image2} alt="Description 2" className="grid-image" />
        <img src={image3} alt="Description 3" className="grid-image" />
        <img src={image4} alt="Description 4" className="grid-image" />
      </div>
    </div>
</div>


      </div>
    )
  }
}
