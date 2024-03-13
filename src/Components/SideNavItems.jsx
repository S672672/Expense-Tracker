// SideNavItems.js

import React from 'react';

const SideNavItems = ({ icon, name, arrow, isActive,onclick }) => {
  return (
    <div
      className={`hover:bg-blue-200 flex flex-col md:flex-row items-center justify-between w-11/12 h-10 m-3 px-2 my-2 mb-1 cursor-pointer rounded-md ${
        isActive ? 'bg-gray-200' : ''
      }`} onClick={onclick}
    >
      <div className='flex items-center justify-center gap-2 md:justify-start gap-2'>
        <div className='text-xl font-normal'>{icon}</div>
        <p className='text-xl font-normal text-gray-700'>{name}</p>
      </div>
      <div className='mt-4 md:mt-0 inline-block rotate-90 font-normal text-xl'>{arrow}</div> 
    </div>
  );
};

export default SideNavItems;
