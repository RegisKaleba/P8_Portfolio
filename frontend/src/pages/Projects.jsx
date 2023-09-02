import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import TextBoxFrame from '../components/BoxText'; 
import Carousel from '../components/Caroussel';
import jsonData from '../data/projects.json';

function Projects() {
  const logos = jsonData.map(project => project.logo);
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const currentProject = jsonData[currentLogoIndex];

  const handleCarouselChange = newIndex => {
    setCurrentLogoIndex(newIndex);
  };

  return (
    <div className="backgroundWall">
      <div className="nav-bar">
        <NavLink />
      </div>

      <Carousel pictures={logos} onChange={handleCarouselChange} />

      <div className="title-container">
      <p className='styledText gradient-text'>{currentProject.titre}</p>
      
      </div>
      <div className="centered-link">
        <a className='projectLink' href={currentProject.lien} target="_blank">
          Cliquez ici pour ouvrir le lien dans une nouvelle fenêtre
        </a>
      </div>
      <div className="infos">

        <div className='box2'>
          
        <TextBoxFrame size="medium" content={currentProject.description} />
        <TextBoxFrame size="medium" content={currentProject.competences.join(', ')} />
        </div>
        <div className='testtesti'>
        <TextBoxFrame size="large"  content={<img src={currentProject.image} alt="Projet" />} />
        </div>
        <div className='diff'>
        <TextBoxFrame size="small" content={currentProject.défi} />
        </div>
  
      </div>
      

    </div>
  );
}

export default Projects;
