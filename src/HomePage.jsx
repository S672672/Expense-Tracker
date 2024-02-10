import React from 'react'
import SideNavBar from './SideNavBar'
import Header from './Header'

function HomePage() {
  return (
    <div className='flex'>
        <SideNavBar />
        <Header />
    </div>
  )
}

export default HomePage