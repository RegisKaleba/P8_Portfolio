import React from 'react';
import NavLink from '../components/NavLink';
import TextBox from '../components/BoxText';
import Carousel from '../components/Caroussel'; // Assurez-vous que le chemin est correct
import jsonData from '../data/projects.json';

function App() {
  const logos = jsonData.map(project => project.logo);

  return (
    <div className="App">
      <div className="nav-bar">
        <NavLink />
      </div>

      <Carousel pictures={logos} />

      <div className="infos">
        <TextBox text="Bonjour ! Je m'appelle Régis Kaleba, développeur Fullstack et web-designeur" />
        <TextBox text="Bonjour ! Je m'appelle Régis Kaleba, développeur Fullstack et web-designeur" />
        <TextBox text={jsonData[0].competences.join(', ')} />
      </div>
    </div>
  );
}

export default App;