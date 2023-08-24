import React from 'react';
import paintStainOrange from '../assets/paintStainOrange.png'; // Chemin vers l'image

const Button = ({ label }) => {
  return (
    <button className="custom-button">
      <div className="button-content">
        <img src={paintStainOrange} alt="Paint Stain" className="button-image" />
        <span className="button-label gradient-text">{label}</span>
      </div>
    </button>
  );
};

export default Button;