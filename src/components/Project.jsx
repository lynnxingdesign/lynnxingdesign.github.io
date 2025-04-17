import React from 'react';
import ProjectItem from './ProjectItem';

// Electrolit image
import Electrolit1 from '/src/assets/Electrolit1Project.jpg';
import Electrolit2 from '/src/assets/Electrolit2Project.jpg';
import Electrolit3 from '/src/assets/Electrolit3Project.jpg';
import Electrolit4 from '/src/assets/Electrolit4Project.jpg';
import Electrolit5 from '/src/assets/Electrolit5Project.jpg';

// Dell image
import Dell1 from '/src/assets/DellSc1Project.jpg';
import Dell2 from '/src/assets/DellSc2Project.jpg';
import Dell3 from '/src/assets/DellSc3Project.jpg';
import Dell4 from '/src/assets/DellSc4Project.jpg';

// Barco image
import Barco1 from '/src/assets/Barco1Project.jpg'
import Barco2 from '/src/assets/Barco2Project.jpg'
import Barco3 from '/src/assets/Barco3Project.jpg'
import Barco4 from '/src/assets/Barco4Project.jpg'
import Barco5 from '/src/assets/Barco5Project.jpg'

// Fairbank image
import Fairbank1 from '/src/assets/Fairbank1Project.jpg';
import Fairbank2 from '/src/assets/Fairbank2Project.jpg';
import Fairbank3 from '/src/assets/Fairbank3Project.jpg';
import Fairbank4 from '/src/assets/Fairbank4Project.jpg';
import Fairbank5 from '/src/assets/Fairbank5Project.jpg';
import Fairbank6 from '/src/assets/Fairbank6Project.jpg';

// Epiroc image
import Epiroc1 from '/src/assets/Epiroc1Project.jpg';
import Epiroc2 from '/src/assets/Epiroc2Project.jpg';
import Epiroc3 from '/src/assets/Epiroc3Project.jpg';
import Epiroc4 from '/src/assets/Epiroc4Project.jpg';
import Epiroc5 from '/src/assets/Epiroc5Project.jpg';

// SoundHound image
import SoundHound1 from '/src/assets/SoundHound1Project.jpg';
import SoundHound2 from '/src/assets/SoundHound2Project.jpg';
import SoundHound3 from '/src/assets/SoundHound3Project.jpg';

// Audi image
import Audi1 from '/src/assets/AudiShowroom1Project.jpg';
import Audi2 from '/src/assets/AudiShowroom2Project.jpg';
import Audi3 from '/src/assets/AudiShowroom3Project.jpg';
import Audi4 from '/src/assets/AudiShowroom4Project.jpg';
import Audi5 from '/src/assets/AudiShowroom5Project.jpg';
import Audi6 from '/src/assets/AudiShowroom6Project.jpg';


const Project = () => {
  const projects = [
    {
      images: [Electrolit1, Electrolit2, Electrolit3, Electrolit4, Electrolit5],
      title: 'Electrolit NACS 2024',

    },
    {
      images: [Dell1, Dell2, Dell3, Dell4],
      title: 'Dell SC 2024',

    },

    {
      images: [Fairbank1, Fairbank2, Fairbank3, Fairbank4, Fairbank5, Fairbank6],
      title: 'Fairbank RFP 2024',

    },

    {
      images: [Barco1, Barco2, Barco3, Barco4, Barco5],
      title: 'Barco RSNA 2024',

    },

    {
      images: [Epiroc1, Epiroc2, Epiroc3, Epiroc4, Epiroc5],
      title: 'Epiroc MineExpo 2024',

    },
    {
      images: [SoundHound1, SoundHound2, SoundHound3],
      title: 'SoundHound NRA 2024',

    },
    {
      images: [Audi1, Audi2, Audi3, Audi4, Audi5, Audi6],
      title: 'Audi Showroom 2023',

    }
  ];

  return (
    <div id='project' className='max-w-[1048px] m-auto md:pl-1 p-1 py-16'>
      <div className='grid sm:grid-cols-1 gap-16'>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            images={project.images}
            title={project.title}

          />
        ))}
      </div>
    </div>
  );
};

export default Project;