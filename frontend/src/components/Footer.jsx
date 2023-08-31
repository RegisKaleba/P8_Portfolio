import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="contact-column">
          <p>Numéro de téléphone : +XX XXX XXX XXX</p>
          <p>Adresse mail : example@example.com</p>
        </div>
      </div>
      <div className="social-links">
        <a href="https://twitter.com/votre_nom" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/votre_nom" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;