import Image from "next/image"
import MountainImage from "../public/mountain.png"
import Link from "next/link"
import { RiBuildingLine, RiFacebookCircleFill } from "react-icons/ri"
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { blog } from '../data/info'

const Introduction = ({blogs}) => {
  const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;
  const shorten = truncate(blog.content, 200, '...')
  return (
    <div className="w-full bg-BG dark:bg-dark-bg" id="home">
      <div className="h-full lg:m-auto lg:max-w-screen-xl lg:pt-12 lg:pb-12 lg:flex">
        <div className="h-full p-5 lg:p-0 md:pl-10 md:pr-10 lg:w-2/3 flex justify-center items-center order-first">
          <div className="lg:h-3/4 lg:w-8/12 bg-white rounded-sm shadow-2xl relative dark:bg-dark-bg_light">
            <div className="lg:h-64 h-48 w-full relative">
              <Image
                src={blogs.cover_photo}
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h1 className="heading pt-8 pb-4 px-3 flex items-center font-bold text-2xl dark:text-dark-white_light">
              {blogs.title}
            </h1>
            <p className="pl-3 pr-3 lg:w-11/12 lg: text-sm flex justify-ceneter text-gray dark:text-dark-white">
             {shorten}
            </p>
            <div className="flex justify-center items-center my-4">
              <Link href="/blog">
                <a className="bg-BG py-2 w-40 text-xs tracking-widest text-gray shadow-xl rounded-sm text-center border border-blue-main">
                  READ MORE
                </a>
              </Link>
              
            </div>
          </div>
        </div>
        <div className="h-full w-full p-5 md:pl-10 lg:w-1/2 lg:p-0 relative z-0">
          <div
            className="h-32 w-32 filter scale blur-2xl contrast-75 rounded-full absolute right-16 top-14 lg:right-60 lg:top-28 md:left-72 md:top-20"
            style={{ background: "#56E4E4" }}
          ></div>
          <div
            className="h-32 w-32 rounded-full absolute lg:right-95 left-5 top-32 filter scale blur-2xl contrast-75 ... md:left-20"
            style={{ background: "#DC7ED8" }}
          ></div>
          <div
            className="h-32 w-32 rounded-full absolute  lg:right-72 lg:top-72 top-48 right-20 filter scale blur-2xl contrast-75 ... md:top-60 md:left-60"
            style={{ background: "#F1DD74" }}
          ></div>
          <p className="md:text-4xl text-3xl font-semibold md:mt-10 mt-5 text-text dark:text-dark-white">
            Hi
          </p>
          <p className="md:text-5xl text-4xl md:mt-5 mt-3 text-text dark:text-dark-white">
            I am{" "}
            <a className="text-blue-main filter scale contrast-100 font-kufi">
              Manish Singh
            </a>
          </p>
          <p className="text-xl md:w-3/4 md:mt-7 mt-4 z-20 dark:text-dark-white">
            I am a{" "}
            <span className="text-blue-600 font-semibold text-blue filter scale contrast-100">
              NYC
            </span>{" "}
            based Data Scientist/Analyst. Highly Motivated and Pationate at what
            I do.
          </p>
          <a href={"/cv.pdf"} download>
            <button
              className="bg-blue-main mt-20 md:mt-16 text-sm h-7 w-32 rounded-sm tracking-wider shadow-2xl"
              style={{ color: "#F7F7FF" }}
            >
              My CV
            </button>
          </a>
          <div className="h-10 w-30 flex w-44 items-end justify-between mt-10 md:mt-20">
            <RiFacebookCircleFill
              className="text-2xl cursor-pointer"
              style={{ color: "#1877f2" }}
            />
            <AiFillTwitterCircle
              className="text-indigo-600 text-2xl cursor-pointer"
              style={{ color: "#00acee" }}
            />
            <AiFillLinkedin
              className="text-blue-600 text-2xl cursor-pointer"
              style={{ color: "#0e76a8" }}
            />
            <AiFillGithub className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
