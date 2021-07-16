import React from 'react';
import { RiFacebookCircleFill } from 'react-icons/ri';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='contact-div bg-blue-main'>
        <div className='contact-con py-8 flex m-auto max-w-screen-lg px-4 md:px-0'>
          <div className='w-2/3'>
            <p className='text-md font-medium' style={{color: '#FFF'}}>MANISH SINGH</p>
            <p className='text-sm font-medium mt-3' style={{color: '#FFF'}}>NYC, NY 11372</p>
            <p className='email text-xs mt-3' style={{color: '#FFF'}}>manishsingh0521@gmail.com</p>
            <div className='social-media-icone flex w-36 justify-between mt-4'>
              <RiFacebookCircleFill className='text-2xl cursor-pointer' style={{color:'#FFF'}}/>
              <AiFillTwitterCircle className='text-indigo-600 text-2xl cursor-pointer' style={{color:'#FFF'}}/>
              <AiFillLinkedin className='text-blue-600 text-2xl cursor-pointer' style={{color:'#FFF'}}/>
              <AiFillGithub className='text-2xl cursor-pointer' style={{color:'#FFF'}}/>
            </div>
          </div>
          <div>
            <p className='text-sm' style={{color:'#FFF'}}>QUICK LINKS</p>
            <ul className='text-xs h-24 mt-3 flex flex-col justify-between' style={{color:'#FFF'}}>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Work</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default Footer
