import React from 'react';

const ProgressBar = (props) => {
  const { title, bgcolor, completed } = props;
  
  return (
    <div className='mt-8 md:flex '>
      <p className='text-md font-bold md:w-4/5 mb-5 dark:text-dark-white_light'>{title}</p>
      <div className='h-3 w-full flex items-center rounded-xl mt-1' style={{background:'#D7D6D6'}}>
        <div className='h-full rounded-xl' style={{width: `${completed}%`, background: bgcolor}}>
          {/* <span>{`${completed}%`}</span> */}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;
