import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_logo.scss';

const Logo = ({ logo, nom, rating }) => {
  const stars = [];
  
  // Ajouter les étoiles pleines
  for (let i = 0; i < rating; i++) {
    stars.push(<i key={`star-${i}`} className="fas fa-star fa-xs gold"></i>);
  }
  
  // Ajouter les étoiles vides
  for (let i = rating; i < 3; i++) {
    stars.push(<i key={`star-${i}`} className="far fa-star fa-xs gold"></i>);
  }

  return (
    <div className="logoAll">
      <p className='gradient-text blablabli'>{nom}</p>
      <img className='logo' src={logo} alt={nom} />
      <p className='gradient-text blablabli'>{stars}</p>
    </div>
  );
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Logo;