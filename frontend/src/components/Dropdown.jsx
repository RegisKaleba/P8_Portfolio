import React, { useState } from 'react';
import upArrow from '../assets/leftArrow1.png';

function Dropdown(props) {
  const dropdownContent = props.dropdownContent;
  const dropdownContainerStyles = props.dropdownContainerStyles;
  const dropdownFontSize = props.dropdownFontSize;

  const [currentState, setCurrentState] = useState(false);

  const openCloseDropdown = () => {
    setCurrentState((prevState) => !prevState);
  };

  let articleStyles = {
    display: currentState ? 'block' : 'none',
  };

  let arrowDropdown = upArrow;

  return (
    <div className='dropdown-container' style={dropdownContainerStyles}>
      <div className={`dropdown ${currentState ? 'open' : ''}`} onClick={openCloseDropdown}>
        <h4 style={dropdownFontSize}>{dropdownContent.h4}</h4>
        <img src={arrowDropdown} alt='' />
      </div>
      <article className='dropdown-content' style={{ ...articleStyles, ...dropdownFontSize }}>
        {dropdownContent.article.map((string, index) => (
          <p key={`${string}-${index}`}>{string}</p>
        ))}
      </article>
    </div>
  );
}

export default Dropdown;

/* Curser = pointer */