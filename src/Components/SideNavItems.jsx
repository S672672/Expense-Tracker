import React from 'react';

export default function SideNavItems ({ icon, name, arrow }) {
  return (
    <div className='flex items-start justify-between w-1/6 h-5 m-3 px-2 my-6 mb-10 cursor-pointer'>
      <div className='flex items-center justify-around'>
        <div>{icon}</div>
        <p className='text-2xl font-bold text-black'>{name}</p>
      </div>
      <div>{arrow}</div>
    </div>
  );
};

