import React, { useState } from 'react';
import NavLink from '../components/NavLink';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown'; 


function About() {
    const dropdownContent = [
        {
            h4: "Parcours et reconversion",
            article: [" Bonjour ! Je suis Régis Kaleba, un développeur passionné en reconversion avec une affection particulière pour le monde du design UX/UI. Mon parcours atypique m'a conduit à explorer les méandres de la technologie, et je suis ravi de partager mon voyage avec vous."],
        },
        {
            h4: "Formations suivies",
            article: ["J'ai commencé à m'autoformer sur des sites comme Khanacademy ou Codecademy. Ce furent mes premiers pas dans le monde du developpement web. J'ai ensuite intégré, via Simplon, l'Apple Fundation programm qui m'a permis de travailler à la conception d'une application en utilisant SwiftUi et de me familiariser avec l'architecture Mac. J'ai ensuite commencé la formation Developpeur Web d'Openclassroom."],
        },
        {
            h4: "Service",
            article: ["Je tiens à remercier les personnes et organismes qui ont permis cette reconversion : Pôle Emploi, Sandrine Lempereur et Angélique Delanghe, Openclassroom et Romaric Pibolleau, la communauté Slack et Discord. "],
        },
        ];

  

 

    return(
        
            <div className="backgroundWall">
                <div className='TestVH'>
                    <div className="nav-bar">
                        <NavLink />
                    </div>

                    <div className="title-container">
                        <p className='styledText gradient-text'>A savoir sur moi :</p>
                    </div>
                
                    <div className='dropdowns-container'>
                        {dropdownContent.map((dropdown, index) => <Dropdown key={`${dropdown}-${index}`} dropdownContent={dropdown}  />)}
                    </div>
                </div>
                <div className='blank'>

                </div>
                <Footer />
            </div>
        
    );
}

export default About;