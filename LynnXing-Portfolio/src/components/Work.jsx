import React from 'react'
import WorkItem from './WorkItem'
import Logo from '/src/assets/Logo.svg'


const data = [
    {
        year: 2022,
        title: 'Exhibit Designer, Catalyst Exhibit',
        duration: 'May 2022 - Current',
        details: `As an exhibit designer, I create, analyze, and deliver designs that tell compelling stories and meet and exceed client's expectations. I work with clients and the internal team to understand and define the goals of each project, creating engaging layouts that enhance visitor experience. I utilize skills in 3D modeling and graphic design to produce detailed renderings and plans, ensuring that each design is both aesthetically pleasing and functional.`
    },
    {
        year: 2022,
        title: 'Furnishing Render Assistant, Inspired Artisans',
        duration: 'Jan 2020 - May 2022',
        details: 'I supported the team by creating high-quality 3D renderings of furniture and interior spaces. My responsibility included collaborating with designers to understand project requirements, utilizing software like SketchUp and Photoshop to produce realistic visualizations, ensuring that designs met client specifications. My attention to detail and strong communication skills contributed to streamlined workflows and successful project outcomes, enhancing client satisfaction and project approvals.'
    },
    {
        year: 2021,
        title: ' Art Project Instructor, GLOMADO',
        duration: 'Apr 2020 - Dec 2021',
        details: 'As an Art Project Instructor, I led engaging art classes for children, fostering creativity and self-expression through various mediums such as painting, drawing, and sculpture. I developed lesson plans that catered to diverse age groups and skill levels, encouraging artistic exploration while promoting teamwork and confidence. My role involved creating a positive and inclusive classroom environment, guiding students in their projects, and providing constructive feedback.'
    },
]


const Work = () => {
  return (
    <div id='work' className='max-w-[1048px] m-auto md:pl-20 p-4 py-15'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e] p-4'>Work Experience</h1>
      {data.map((item, idx) => (
        <WorkItem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />
      ))}
      {/* <Logo></Logo> */}
    </div>
  );
};


export default Work