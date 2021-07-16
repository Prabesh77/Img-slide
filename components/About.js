import Image from 'next/image';
import ProfileImage from '../public/profile.jpg';
import University from './University/University';

const About = (props) => {
  const universities=[
    {
      name: 'Fordham University',
      subject: 'Masters in Data Science •Present',
      dec: 'Currently enrolled for Data Science and Project Management.'
    },
    {
     name: 'Code Immersives, NYC',
     subject: 'Full-Stack Web Development 900 hours Course •Dec 2019',
     dec: 'Graduated as a junior web developer.'
   },
   {
     name: 'Baruch College - CUNY',
     subject: 'Masters in Public Administration •Dec 2018',
     dec: 'Graduated as a junior web developer.'
   },
   {
     name: 'McNeese State University',
     subject: 'BSc in Chemistry •Dec 2013',
     dec: 'Graduated with concentration in Biochemistry and Mathematics.'
   }   
   ]

  return (
    <div className='about-section w-full p-5 pt-16 dark:bg-dark-bg_light' id="about">
      <div className='about-con h-full m-auto max-w-screen-lg md:flex md:gap-10 '>
        <div className='h-full lg:w-1/2 flex justify-between items-center'>
          <div className='lg:w-72 md:mt-5'>
            <div className='heading  w-3/4 h-24 relative dark:text-dark-white'>
              <div className='text-6xl absolute font-bold top-3 left-14 opacity-10'>&</div>
              <p className='text-3xl font-kufi'>About Me</p>
              <p className='text-3xl font-kufi mt-5'>My Education</p>
            </div>
            <div className='mt-5 md:mt-10 w-64 h-80 relative'>
              <Image src="/profile.jpg"  layout="fill" objectFit="cover"  alt=""/>
            </div>
          </div> 
        </div>
          <div className='h=full mt-5 lg:w-2/3 lg:ml-8 '>
            <p className='text-sm md:w-4/5 text-gray dark:text-dark-white'>It is a long established fact that a reader will be distracted by the readable content of a page when
               looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
               of letters, as It is a long established fact that a reader will be distracted by the readable content of.
            </p>
            <div className='mt-8 md:mt-8'>
              <University items={universities}/>
            </div>
          </div>
      </div>  
    </div>
  )
}

export default About;
