import React from 'react';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import jsonData from '../data/skills.json';
import '../styles/_skills.scss'; // Ajoutez les styles CSS nécessaires

function Skills() {
  const frontendSkills = jsonData.filter(skill => skill.Skills === 'Frontend');
  const backendSkills = jsonData.filter(skill => skill.Skills === 'Backend');
  const autresSkills = jsonData.filter(skill => skill.Skills === 'Autres');

  return (

    
    <div className="skills">

      <div className="nav-bar">
        <NavLink />
      </div>

      <section className='sectionLogo'>
        <h2 className='centered'>Frontend</h2>
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
      <section>
        <h2 className='centered'>Backend</h2>
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
      <section>
        <h2 className='centered'>Autres</h2>
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
  );
}

export default Skills;