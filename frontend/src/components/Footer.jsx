import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-column">
          <p>Numéro de téléphone : 06 37 38 73 01</p>
          <p>Adresse mail : regis.kaleba@orange.fr</p>
        </div>
      </div>
      <div className="social-links">
        <a href="@rk" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/RegisKaleba/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;