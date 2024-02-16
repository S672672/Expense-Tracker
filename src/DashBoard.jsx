import React from 'react'
import NavTitle from './Components/NavTitle'
import ShowAll from './Components/ShowAll'

function DashBoard() {
  return (
    <div className='flex flex-col m-3'>
    <NavTitle NavTitle="DashBoard" />
    <ShowAll title = "Total" amount="$30,300" share="+2.4%" ShowIcon="" />
    </div>
  )
}

export default DashBoard