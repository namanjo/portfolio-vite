import React from 'react'
import ProjectItem from './ProjectItem'
import financeImg from '../assets/finance.jpg'
import mapsImg from '../assets/maps.jpg'
import netflixImg from '../assets/netflix.jpg'
import musicImg from '../assets/music.jpg'



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui accusamus nemo quos molestiae corporis obcaecati, sequi optio impedit doloribus perferendis officiis? Aperiam cum, tempore error culpa nostrum sint nesciunt iure.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={musicImg} title='Soundsurf' />
            <ProjectItem img={mapsImg} title='Maps Locator' />
            <ProjectItem img={financeImg} title='Crypto App' />
            <ProjectItem img={netflixImg} title='Netflix Clone' />
        </div>
    </div>
  )
}

export default Projects