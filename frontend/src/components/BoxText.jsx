import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Importer la bibliothèque classNames
import '../styles/_boxText.scss'; // Importation des styles CSS

const TextBoxFrame = ({ content, size }) => {
  const className = classNames('text-box-frame', {
    'large': size === 'large', // Appliquer la classe 'large' si la taille est 'large'
    'medium': size === 'medium', // Appliquer la classe 'small' si la taille est 'small'
    'small': size === 'small', // Appliquer la classe 'small' si la taille est 'small'
  });

  return (
    <div className={className}>
      {content}
    </div>
  );
};

TextBoxFrame.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Prop pour la taille
};

export default TextBoxFrame;