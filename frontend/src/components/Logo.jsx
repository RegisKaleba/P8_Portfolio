import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_logo.scss';

const Logo = ({ logo, nom, rating }) => {
  return (
    <div className="logoAll">
      <p className='gradient-text blablabli'>{nom}</p>
      <img className='logo' src={logo} alt={nom} />
      <p>Rating: {rating}/3</p>
    </div>
  );
};

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Logo;