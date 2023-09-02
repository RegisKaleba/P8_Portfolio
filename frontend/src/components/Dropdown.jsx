import React, { useState } from 'react';
import upArrow from '../assets/leftArrow1.png';

function Dropdown(props) {
  const dropdownContent = props.dropdownContent;
  const [currentState, setCurrentState] = useState(false);

  const openCloseDropdown = () => {
    setCurrentState((prevState) => !prevState);
  };

  let articleStyles = {
    display: currentState ? 'block' : 'none',
  };

  let arrowDropdown = upArrow;

  return (
    <div className='dropdown-container' >
      <div className={`dropdown ${currentState ? 'open' : ''}`} onClick={openCloseDropdown}>
        <h4 >{dropdownContent.h4}</h4>
        <img src={arrowDropdown} alt='' />
      </div>
      <article className='dropdown-content' style={{ ...articleStyles}}>
        {dropdownContent.article.map((string, index) => (
          <p key={`${string}-${index}`}>{string}</p>
        ))}
      </article>

      <div className='blank'>
     
    </div>
    </div>
    
  );
}

export default Dropdown;

/* Curser = pointer */