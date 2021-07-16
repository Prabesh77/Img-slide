import { useState } from 'react'
import Navbar from '../components/Navbar';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Experience from '../components/Experience';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default function Home({blogs}) {
  console.log(blogs)
  return (
    <div >
       <Layout>
       <Introduction blogs={blogs[0]}/>
       <About/>
       <Experience/>
       <Skill/>
       <Contact/>
       </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://mangonepal.com/v1/blog')
  const res = await response.json()
  const blogs = res.data.filter(d => d.pinned === true)
  
  return {
    props: {
      blogs
    }
  }
}
