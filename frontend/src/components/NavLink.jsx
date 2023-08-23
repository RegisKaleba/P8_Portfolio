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
      <Button label="Mes Bidules" />
    </div>
  );
};

export default NavLink;