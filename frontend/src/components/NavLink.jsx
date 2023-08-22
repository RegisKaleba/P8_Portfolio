import React from 'react';
import Button from '../components/ButtonPaint';
import '../styles/_navLink.scss'; // Importation des styles CSS

const NavLink = () => {
  return (
    <div className="nav-link">
      <Button label="Accueil" />
      <Button label="Mes Projets" />
      <Button label="Mes Projets" />
      <Button label="Mes Projets" />
      <Button label="Mes Projets" />
      <Button label="Mes Projets" />
      <Button label="Mes Projets" />
    </div>
  );
};

export default NavLink;