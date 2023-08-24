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
    <div className="App">
      <div className="nav-bar">
        <NavLink />
      </div>

      <Carousel pictures={logos} onChange={handleCarouselChange} />

      <div className="infos">
        <TextBoxFrame content={currentProject.description} />
        <TextBoxFrame content={<img src={currentProject.image} alt="Projet" />} />
        <TextBoxFrame content={currentProject.competences.join(', ')} />
      </div>
    </div>
  );
}

export default App;
