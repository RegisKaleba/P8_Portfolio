import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown'; // Assurez-vous que le chemin est correct


function About() {
    const dropdownContent = [
        {
            h4: "Parcours et reconversion",
            article: [" Bonjour ! Je suis Régis Kaleba, un développeur passionné en reconversion avec une affection particulière pour le monde du design UX/UI. Mon parcours atypique m'a conduit à explorer les méandres de la technologie, et je suis ravi de partager mon voyage avec vous."],
        },
        {
            h4: "Formations suivies",
            article: ["Blablabla bliblablu"],
        },
        {
            h4: "Service",
            article: ["Blablabla bliblablu"],
        },
        ];

  

    let dropdownFontSize = {
        fontSize: "24px",
    }

    return(
        
            <div className="backgroundWall">
                <div className='TestVH'>
                    <div className="nav-bar">
                        <NavLink />
                    </div>

                    <div className="title-container">
                        <p className='styledText gradient-text'>Tralala</p>
                    </div>
                
                    <div className='dropdowns-container'>
                        {dropdownContent.map((dropdown, index) => <Dropdown key={`${dropdown}-${index}`} dropdownContent={dropdown}  dropdownFontSize={dropdownFontSize}/>)}
                    </div>
                </div>
                <div className='blank'>

                </div>
                <Footer />
            </div>
            

        
    );
}

export default About;