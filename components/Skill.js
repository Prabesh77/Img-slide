import React from "react"
import ProgressBar from "./ProgressBar/ProgressBar"

const testData = [
  {
    title: "HTML5",
    bgcolor: "#449DD1",
    completed: 85,
  },
  {
    title: "CSS3",
    bgcolor: "#449DD1",
    completed: 70,
  },
  {
    title: "Javascript",
    bgcolor: "#449DD1",
    completed: 50,
  },
  {
    title: "ReactJS",
    bgcolor: "#449DD1",
    completed: 50,
  },
  {
    title: "GitHub",
    bgcolor: "#449DD1",
    completed: 50,
  },
  {
    title: "MangoDB",
    bgcolor: "#449DD1",
    completed: 50,
  },
]

const Skill = () => {
  return (
    <div className=" pr-5 pl-5 py-16 dark:bg-dark-bg_light" id="skills">
      <div className="m-auto max-w-screen-lg">
        <div className="h-full">
          <div className="heading w-full h-28 relative border-b border-blue-main dark:text-dark-white">
            <div className="text-6xl absolute font-bold top-4 left-10 opacity-10">
              &
            </div>
            <p className="text-3xl font-kufi">My Skills</p>
            <p className="text-3xl font-kufi mt-4">Experries</p>
          </div>
        </div>
        <div>
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              title={item.title}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
