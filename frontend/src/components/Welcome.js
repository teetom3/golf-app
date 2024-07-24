import React, { Component } from 'react';
import "../styles/welcome.css";


export default class Welcome extends Component {
  render() {
    return (
      <div>
  <div class="hero-container">
  <div class="hero-content">
    <h1 class="hero-title">Maîtrisez l'Art du Golf avec un Pro</h1>
    <p class="hero-subtitle">Des cours individuels, collectifs et des sessions de team building pour entreprises</p>
    <p class="hero-description">
      Améliorez votre jeu rapidement grâce à des leçons personnalisées utilisant le Garmin R10, une technologie de pointe pour une progression rapide et efficace. Que vous soyez débutant ou expert, je vous aiderai à atteindre vos objectifs.
    </p>
    <a href="/login" class="hero-button">Réservez votre cours aujourd'hui</a>
  </div>
</div>



      </div>
    )
  }
}
