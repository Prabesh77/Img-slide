const ExperienceItem = (props) => {
  return (
    <div className='lg:flex w-full justify-between'>
      <div className='w-full md:w-1/2'>
        <p className='text-lg text-gray dark:text-dark-white'>{props.date}</p>
        <p className='text-sm mt-1 dark:text-dark-white_light'>{props.post}</p>
      </div>
      <div className='mt-3 lg:mt-0 w-full md:w-1/2'>
        <p className='text-blue-main text-xl  font-kufi font-lighter'>{props.name}</p>
        <p className='text-sm text-gray mb-8 dark:text-dark-white'>{props.dec}</p>
      </div>
    </div>
  )
}

export default ExperienceItem
