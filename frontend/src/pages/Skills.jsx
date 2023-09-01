import React from 'react';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import jsonData from '../data/skills.json';
import '../styles/_skills.scss';

function Skills() {
  const frontendSkills = jsonData.filter(skill => skill.Skills === 'Frontend');
  const backendSkills = jsonData.filter(skill => skill.Skills === 'Backend');
  const autresSkills = jsonData.filter(skill => skill.Skills === 'Autres');

  return (

    <div className="skills-page">
    <div className="backgroundWall">

      <div className="nav-bar">
        <NavLink />
      </div>
      <div className="title-container">
      <p className='gradient-text styledText'>Frontend</p>
      </div>
      <section className='sectionLogo'>
        
        <div className="skills-list">
          {frontendSkills.map(skill => (
            <Logo 
              key={skill.Nom}
              logo={skill.Logo}
              nom={skill.Nom}
              rating={skill.Rating}
            />
          ))}
        </div>
      </section>
     
      
      <div className="title-container">
      <p className='gradient-text styledText'>Backend</p>
      </div>

      <section className='sectionLogo'>

        <div className="skills-list">
          {backendSkills.map(skill => (
            <Logo
              key={skill.Nom}
              logo={skill.Logo}
              nom={skill.Nom}
              rating={skill.Rating}
            />
          ))}
        </div>
      
      </section>
      
      <div className="title-container">
      <p className='gradient-text styledText'>Autres</p>
      </div>

      <section className='sectionLogo'>
        <div className="skills-list">
          {autresSkills.map(skill => (
            <Logo
              key={skill.Nom}
              logo={skill.Logo}
              nom={skill.Nom}
              rating={skill.Rating}
            />
          ))}
        </div>
        </section>
   
    </div>
    </div>
  );
}

export default Skills;