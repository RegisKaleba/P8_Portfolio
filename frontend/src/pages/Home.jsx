import React from 'react';
import LogoRK from '../assets/LogoRK-resized.png';
import NavLink from '../components/NavLink';
import TextBoxFrame from '../components/BoxText';


function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <NavLink />
      </div>
      <header className="App-header">
        <img src={LogoRK} className="testo" alt="logo" />
        <div >
          <TextBoxFrame size="tiny" content="Bonjour !\n Je m'appelle Régis Kaleba, développeur Fullstack et web-designer" />
        </div>
      </header>

     


      
    </div>
  );
}

export default App;   