const UniversityItem = (props) => {
  return (
   <div>
    <p className='text-xl text-blue-main font-kufi'>{props.name}</p>
    <p className='text-lg mt-1 text-gray dark:text-dark-white'>{props.subject}</p>
    <p className='text-xs mt-2 text-gray mb-3 dark:text-dark-white'>{props.dec}</p>
   </div>
  )
}

export default UniversityItem;
