import React from 'react';
import logo from '../logo.svg';
import Button from '../components/ButtonPaint';
import NavLink from '../components/NavLink'; // Chemin vers le composant Button



function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <NavLink />
      <Button label="Accueil" />
      <Button label="Mes Projets" />
    </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;