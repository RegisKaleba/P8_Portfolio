import React from 'react';
import { Link } from 'react-router-dom';




function Error() {
    return(
        <React.StrictMode>
            <div className='error-page'>
               <span className='error-status'>404</span> 
                <span className='error-desc'>Oups! La page que vous demandez n'existe pas.</span>
                <Link to="/" className='home-link'>Retourner sur la page d’accueil</Link>
            </div>  
        </React.StrictMode>
    );
}

export default Error;