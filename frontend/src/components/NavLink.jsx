import React from 'react';
import Button from '../components/ButtonPaint';
import { Link } from 'react-router-dom';
import '../styles/_navLink.scss'; // Importation des styles CSS

const NavLink = () => {
  return (
    <div className="nav-link">

      <Link to="/">
        <Button label="Accueil" />
      </Link>
      <Link to="/projects">
        <Button label="Mes Projets" />
      </Link>
      <Link to="/skills">
      <Button label="Mes Compétences" />
      </Link>
      <Link to="/aboutMe">
      <Button label="A propos de moi" />
      </Link>
    </div>
  );
};

export default NavLink;