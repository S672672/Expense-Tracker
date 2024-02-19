import React from 'react'
import ShowAll from '../Components/ShowAll'
import BarChart from '../Components/BarChart'

export default function DashBoard() {
  return (
    <div className='flex flex-col m-3'>
    <ShowAll title = "Total" amount="$30,300" share="+2.4%" ShowIcon="" />
    <BarChart />
    </div>
  )
}