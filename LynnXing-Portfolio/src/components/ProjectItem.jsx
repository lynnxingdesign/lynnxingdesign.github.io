import React from 'react';
import ImageSlider from './ImageSlider';

const ProjectItem = ({ images, title, ProgrammingLanguage, ProjectLink }) => {
  return (
    <div className='relative h-[600px] w-full shadow-xl shadow-gray-400 rounded-xl'>
      <ImageSlider images={images} />
      <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 rounded-b-xl'>
        <h3 className='text-2xl font-bold text-white tracking-wider'>
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ProjectItem;