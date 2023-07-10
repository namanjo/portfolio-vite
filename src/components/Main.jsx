import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1688832471544-fe6012ac737d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="header image" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/40'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm John Adams</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 font-bo text-gray-800'>I'm a
                    <TypeAnimation
                        sequence ={[
                            'Developer',
                            1000,
                            'Coder',
                            2000,
                            'Tech Enthusiast',
                            2000,
                        ]}
                        repeat={Infinity}
                        style={{fontSize: '1em', paddingLeft: '5px'}}
                    />
                </h2>
                <div className='flex max-w-[200px] pt-6 justify-between w-full'>
                    <FaTwitter size={20} className='cursor-pointer'/>
                    <FaFacebook size={20} className='cursor-pointer'/>
                    <FaInstagram size={20} className='cursor-pointer'/>
                    <FaLinkedin size={20} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main