import React from 'react'
import SideNavBar from './SideNavBar'
import Header from './Header'

export default function HomePage() {
  return (
    <div className='flex'>
        <SideNavBar />
        <Header />
    </div>
  )
}