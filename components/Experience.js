import ExperienceList from "./Work/ExperienceList";

const Experience = (props) => {
  const experiences=[
    {
      date: 'Jan 2019 - Nov',
      post: 'Data Scientist/Analyst',
      name: 'Mango Consulting LLC, NYC',
      dec: 'Worked as a junior Data Scientist and helped with IT Project Management.'
    },
    {
      date: 'Dec 2017 - Feb 2018',
      post: 'Paralegal',
      name: 'Internal Revenue Service IRS (New York, NY)',
      dec: 'Interned as a Paralegal at the office of Chief Counsel.'
    },
    {
      date: 'Feb 2018 - Jan 2019',
      post: 'Economist',
      name: 'UNITED STATES OF ARMY CORP OF ENGINEERS (New York, NY)',
      dec: 'Worked as an economist for Planning Divison.'
    }
  ]
  return (
    <div className='bg-BG dark:bg-dark-bg p-5 pt-16' id="experience">
      <div className='experience-con h-full m-auto max-w-screen-lg'>
        <div className='h-full flex justify-between'>
          <div className='heading w-full h-28 relative border-b border-blue-main dark:text-dark-white'>
            <div className='text-6xl absolute font-bold top-4 left-10 opacity-10'>&</div>
              <p className='text-3xl font-kufi mt-3'>My Work</p>
              <p className='text-3xl font-kufi mt-2'>Experience</p>
            </div>
          </div>
          <div className='mt-5'>
            <ExperienceList items={experiences}/>
          </div>

        </div>

      </div>
  )
}

export default Experience
