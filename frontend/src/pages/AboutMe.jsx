import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import Dropdown from '../components/Dropdown'; // Assurez-vous que le chemin est correct


function About() {
    const dropdownContent = [
        {
            h4: "Parcours et reconversion",
            article: [" Bonjour ! Je suis [Votre Nom], un développeur passionné en reconversion avec une affection particulière pour le monde du design UX/UI. Mon parcours atypique m'a conduit à explorer les méandres de la technologie, et je suis ravi de partager mon voyage avec vous."],
        },
        {
            h4: "Formations suivies",
            article: ["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."],
        },
        {
            h4: "Service",
            article: ["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."],
        },
        ];

    let dropdownContainerStyles = {
        margin: "0px 15% 33px 15%",
        
    }

    let dropdownFontSize = {
        fontSize: "24px",
    }

    return(
        <React.StrictMode>
            <div className="backgroundWall">
                <div className="nav-bar">
                    <NavLink />
                </div>

                <div>
                    Tralala
                </div>
            
                <div className='dropdowns-container'>
                    {dropdownContent.map((dropdown, index) => <Dropdown key={`${dropdown}-${index}`} dropdownContent={dropdown} dropdownContainerStyles={dropdownContainerStyles} dropdownFontSize={dropdownFontSize}/>)}
                </div>

            </div>

        </React.StrictMode>
    );
}

export default About;