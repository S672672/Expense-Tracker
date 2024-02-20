import React from 'react';
import SideNavItems from './Components/SideNavItems';

export default function SideNavBar() {
  return (
    <div className='h-screen w-full md:w-1/4 lg:w-1/6 border-e-2 border-gray-400'>
   
        <SideNavItems icon="&#x1F4CA;" name="Dashboard" arrow="&#8659;" />
    
        <SideNavItems icon="&#x1F4CA;" name="Add Expense" arrow="&#8659;" />
     
        <SideNavItems icon="&#x1F4CA;" name="Wallet" arrow="&#8659;" />
     
        <SideNavItems icon="&#x1F4CA;" name="Profile" arrow="&#8659;" />
      
        <SideNavItems icon="&#x1F4CA;" name="Setting" arrow="&#8659;" />
      
        <SideNavItems icon="&#x1F4CA;" name="Log Out" arrow="&#8659;" />
    
    </div>
  );
}
