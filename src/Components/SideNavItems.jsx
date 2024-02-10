import React from 'react';

export default function SideNavItems({ icon, name, arrow }) {
  return (
    <div className='hover:bg-gray-200 flex flex-col md:flex-row items-center justify-between w-11/12 h-10 m-3 px-2 my-6 mb-10 cursor-pointer rounded-md'>
      <div className='flex items-center justify-between md:justify-start gap-2'>
        <div>{icon}</div>
        <p className='text-2xl font-bold text-black'>{name}</p>
      </div>
      <div className='mt-4 md:mt-0'>{arrow}</div>
    </div>
  );
};
