import React from 'react'
import Header from './Header'
import DashBoard from './Pages/DashBoard'
import NavTitle from './Components/NavTitle'

function ViewPage() {
  return (
    <div className='flex flex-col w-screen bg-gray-100'>
    <Header />
    <NavTitle NavTitle="DashBoard" />
    <DashBoard />
    </div>
  )
}

export default ViewPage