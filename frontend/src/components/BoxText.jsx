import React from 'react';
import PropTypes from 'prop-types';
import '../styles/_boxText.scss'; // Importation des styles CSS

const TextBoxFrame = ({ content }) => {
  return (
    <div className="text-box-frame">
      {content}
    </div>
  );
};

TextBoxFrame.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
};

export default TextBoxFrame;