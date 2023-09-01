import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; 
import '../styles/_boxText.scss'; 

const TextBoxFrame = ({ content, size }) => {
  const className = classNames('text-box-frame', {
    'large': size === 'large', 
    'medium': size === 'medium', 
    'small': size === 'small', 
    'tiny': size === 'tiny', 
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
  size: PropTypes.oneOf(['tiny','small', 'medium', 'large']), // Prop pour la taille
  

};

export default TextBoxFrame;