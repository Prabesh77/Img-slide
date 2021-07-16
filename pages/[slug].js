import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Link from 'next/link'
import Image from 'next/image'
import MountainImage from "../public/mountain.png"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, TwitterIcon } from "react-share"
import { useRouter} from 'next/router'
import { blog } from "../data/info"

const Blog = () => {
  // const [light, setLight] = useState(true)
  const route = useRouter()
  console.log(route)
  return (
    <div>
      <Navbar />
      <div className="min-h-screen lg:p-0 md:pl-10 md:pr-10 lg:w-2/3 flex justify-center order-first dark:bg-dark-bg mx-auto">
        <div className="rounded-sm  relative dark:bg-dark-bg_light">
        <h1 className="heading p-3 lg:h-16 flex items-center font-bold text-2xl dark:text-dark-white_light">
           {blog.title}
          </h1>
          <div className="h-96 w-full relative">
            {/* <img src={blog.image} alt="" layout="fill" objectFit="cover" /> */}
            <Image src={blog.image} alt="" className="h-full w-full" />
            
          </div>
         
          <p className=" py-8 text-sm flex justify-ceneter text-gray dark:text-dark-white">
           {blog.content}
          </p>
         <FacebookShareButton url>
           <FacebookIcon></FacebookIcon>
         </FacebookShareButton>
        </div>
      </div>
    </div>
  )
}

export default Blog
