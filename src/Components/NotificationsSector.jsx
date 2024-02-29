import React from 'react'

export default function NotificationsSector({ name, activity, timestamp }) {
    return (
      <div className='w-full bg-white p-2 px-3 br-2 flex items-center cursor-pointer hover:bg-gray-100'>
        <img
          src='../src/assets/profile.png'
          alt={`${name}'s profile`}
          className='w-20 h-20 rounded-full mr-4'
        />
        <div className='flex-grow'>
          <div className='flex items-center justify-between mb-2'>
            <div>
              <p className='text-xl font-bold'>{name}</p>
              <p className='text-gray-500 font-bold'>{activity}</p>
            </div>
          </div>
          <p className='text-blue-400 font-bold'>{timestamp}</p>
        </div>
      </div>
    );
  }
