import React from 'react';
import weatherappImg from '../public/assets/projects/weatherapp.jpg';
import gameImg from '../public/assets/projects/game.jpg';
import todolistImg from '../public/assets/projects/todolist.jpg';
import savemyplacesImg from '../public/assets/projects/savemyplaces.jpg';
import ProjectItem from './ProjectItem';


const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1000px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#ae3cfa]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Weather App'
            backgroundImg={weatherappImg}
            projectUrl='/weatherapp'
            tech='HTML - CSS - Vanilla JavaScript'
          />
          <ProjectItem
            title='Jumping Game'
            backgroundImg={gameImg}
            projectUrl='/game'
            tech='HTML - CSS - JavaScript'

          />
          <ProjectItem
            title='Todo List'
            backgroundImg={todolistImg}
            projectUrl='/todolist'
            tech='React - Bootstrap'

          />
          <ProjectItem
            title='Save My Places'
            backgroundImg={savemyplacesImg}
            projectUrl='/savemyplaces'
            tech='MongoDB - Express - React - Node - Ant Design'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;