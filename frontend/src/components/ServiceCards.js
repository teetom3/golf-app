import React from 'react';
import '../styles/ServiceCards.css';
import collectif from "../assets/collectif.jpg";
import particulier from "../assets/particulier.jpg";
import seminaires from "../assets/seminaires-3.jpg";

const services = [
  {
    title: 'Cours Particuliers',
    description: 'Des cours sur mesure pour répondre à vos besoins spécifiques.',
    image: particulier
  },
  {
    title: 'Cours Collectifs',
    description: 'Apprenez en groupe dans une ambiance conviviale.',
    image: collectif
  },
  {
    title: 'Team Building Entreprise',
    description: 'Renforcez les liens de votre équipe à travers des activités stimulantes.',
    image: seminaires
  }
];

const ServiceCards = () => {
  return (
    <div className="service-cards-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-content">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
