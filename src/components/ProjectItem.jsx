import React from 'react'

const ProjectItem = ({img, title}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt='/' className=' group-hover:opacity-10 w-full h-full object-cover' />
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider'>
                {title}
            </h3>
            <p className='p-2 text-white text-center'>React Js</p>
            <a href="/">
                <p className='text-center p-2 bg-white text-gray-700 cursor-pointer text-lg'>More Info</p>              
            </a>
        </div>
    </div>
  )
}

export default ProjectItem