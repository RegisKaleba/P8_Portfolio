import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_boxText.scss'; // Importation des styles CSS

const TextBoxFrame = ({ text }) => {
  return (
    <div className="text-box-frame">
      {text}
    </div>
  );
};

TextBoxFrame.propTypes = {
  text: PropTypes.string.isRequired, // Propriété "text" est requise et doit être de type string
};

export default TextBoxFrame;