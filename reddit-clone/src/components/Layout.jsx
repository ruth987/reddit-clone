import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Routers from '../Routers'

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Routers />
        <Footer />
    
    </div>
  )
}

export default Layout