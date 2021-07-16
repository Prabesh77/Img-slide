import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    const [light, setLight] = useState(true)
 
    // const themeControl = () => {
    //     console.log('themecontrol')
    //     if(localStorage.getItem('theme') === true) {
    //         localStorage.setItem('theme', false)
    //     }
    //     else {
    //         localStorage.setItem('theme', true)
    //     }
        
    // }
    return (
        <div className={light? '': 'dark'}>
            <Navbar setLight={setLight} light={light} />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
