import { useState } from "react"
import {motion} from 'framer-motion'
import { HiMenuAlt1,HiOutlineX  } from "react-icons/hi";
import Link from 'next/link'

const Navbar = ({ light, setLight }) => {
  const [show, setShow] = useState(false)
  return (
    <div className="h-16 w-full bg-blue-main shadow-lg sticky top-0 z-10">
      <div className="navbar-items h-full lg:m-auto lg:max-w-screen-lg flex justify-between items-center px-4 md:px-0">
        <div><Link href="/"><a >LOGO</a></Link></div>
        {/* <div className="flex">
          <p className="text-dark-white">Light</p>
          <label className="switch mx-2" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setLight(!light)}
            />
            <div className="slider round"></div>
          </label>
          <p>Dark</p>
        </div> */}
        <motion.ul
          className={`w-full md:w-1/2 md:h-full ${
            show ? "" : "hidden"
          }  border border-dark-white absolute top-16 right-0 bg-blue-main md:bg-blue-main md:static md:border-none md:flex flex-col md:flex-row justify-around items-center text-xs `}
        >
          <Link  href="/#">
          <a>
            <li className="cursor-pointer text-BG tracking-widest w-full text-center hover:bg-BG  hover:text-dark-bg py-4 md:py-2 px-8" onClick={() => setShow(false)}>
              HOME
            </li>
          </a>
          </Link>
         
         <Link href="#about">
         <a >
            <li className="cursor-pointer text-BG tracking-widest w-full text-center hover:bg-BG hover:text-dark-bg  py-4 md:py-2 px-8 " onClick={() => setShow(false)}>
              ABOUT
            </li>
          </a>
         </Link>

         <Link href="#experience">
         <a >
            <li className="cursor-pointertext-BG text-BG tracking-widest w-full text-center hover:bg-BG hover:text-dark-bg py-4 md:py-2 px-8" onClick={() => setShow(false)}>
              WORK
            </li>
          </a>
         </Link>
          
          <Link href="#skills">
          <a >
            <li className="cursor-pointer text-BG tracking-widest w-full text-center hover:bg-BG hover:text-dark-bg py-4 md:py-2 px-8 " onClick={() => setShow(false)}>
              SKILLS
            </li>
          </a>
          </Link>
          
          <Link href="#contact">
          <a >
            <li className="cursor-pointer text-BG tracking-widest w-full text-center hover:bg-BG hover:text-dark-bg py-4 md:py-2 px-8" onClick={() => setShow(false)}>
              CONTACT
            </li>
          </a>
          </Link>
          
        </motion.ul>
        <div className="flex">
          <p className="text-dark-white">Light</p>
          <label className="switch mx-2" htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setLight(!light)}
            />
            <div className="slider round"></div>
          </label>
          <p>Dark</p>
        </div>
        <div onClick={() => setShow(!show)} className="md:hidden cursor-pointer">
          {/* <div className="h-1 w-8 bg-dark-white"></div>
          <div className="h-1 w-8 bg-dark-white my-1"></div>
          <div className="h-1 w-8 bg-dark-white"></div> */}
          {show?<HiOutlineX className="text-dark-white text-3xl"/>:  <HiMenuAlt1 className="text-dark-white text-3xl"/>}
         
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
