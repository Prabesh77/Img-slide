import React from 'react'

const Contact = () => {
  return (
    <div className='bg-BG dark:bg-dark-bg w-full pt-16' id="contact">
      <div className='lg:max-w-screen-lg lg:m-auto h-full ml-5 mr-5'>
        <p className='pt-5 text-3xl font-semibold dark:text-dark-white'>Reach Me</p>
        <div>
          <form action="" className='md:flex mt-14 w-full'>
            <div className='md:w-2/5'>
              <div className='flex flex-col'>
                <label htmlFor="name" className='text-xs text-blue font-medium dark:text-dark-white'>Full Name</label>
                <input type="text" className='mt-2 w-full md:w-52 text-sm p-2' style={{border: '1px solid #449DD1'}} />
              </div>
              <div className='mt-7 flex flex-col'>
                <label htmlFor="email" className='text-xs text-blue font-medium dark:text-dark-white'>Email</label>
                <input type="text" className='mt-2 w-full md:w-52 text-sm p-2' style={{border: '1px solid #449DD1'}} />
              </div>
            </div>
            <div className='mt-7 md:mt-0 flex flex-col md:ml-9'>
              <label htmlFor="message" className='text-xs text-blue font-medium dark:text-dark-white'>Message</label>
              <textarea name="" id="" cols="30" rows="10" className='mt-2 h-36 text-sm p-1 md:w-80' style={{border: '1px solid #449DD1'}}></textarea>
              <button className='mt-5 w-48 inline-block bg-blue-main text-sm rounded-sm mb-12 py-2 px-8 md:self-end' style={{color:'#F7F7FF'}}>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
