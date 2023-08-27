import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import TextBoxFrame from '../components/BoxText'; // Assurez-vous que le chemin est correct
import Carousel from '../components/Caroussel';
import jsonData from '../data/projects.json';

function App() {
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
      <p className='gradient-text centredTitle'>{currentProject.titre}</p>
      <p>{currentProject.lien}</p>

      <div className="infos">

        <div className="box2">
          <TextBoxFrame size="medium"  content={currentProject.description} />
          <TextBoxFrame size="medium"  content={currentProject.description} />
        </div>
        <TextBoxFrame size="large"  content={<img src={currentProject.image} alt="Projet" />} />
        <TextBoxFrame size="small" content={currentProject.competences.join(', ')} />
      
      </div>
    </div>
  );
}

export default App;
