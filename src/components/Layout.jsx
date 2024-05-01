import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='layout'>
      <Navigation />
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout