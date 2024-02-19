import React from 'react'
import SideNavBar from './SideNavBar'
import ViewPage from './ViewPage'

export default function HomePage() {
  return (
    <div className='flex'>
        <SideNavBar />
        <ViewPage />
    </div>
  )
}