import React from 'react';
import SideNavItems from './Components/SideNavItems';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function SideNavBar() {
  const location = useLocation();
  const isPageActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className='h-screen w-full md:w-1/4 lg:w-1/6 border-e-2 border-gray-400'>
    <NavLink to = "/dashboard" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Dashboard" arrow="&#8659;" isActive={isPageActive('/dashboard')} />
        </NavLink>
        <NavLink to="/exp" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Add Expense" arrow="&#8659;" isActive={isPageActive('/exp')} />
        </NavLink>
        <NavLink to="/wallet" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Wallet" arrow="&#8659;" isActive={isPageActive('/wallet')} />
        </NavLink>
        <NavLink to="/profile" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Profile" arrow="&#8659;" isActive={isPageActive('/profile')} />
        </NavLink>
      
        <SideNavItems icon="&#x1F4CA;" name="Setting" arrow="&#8659;" />
      
        <SideNavItems icon="&#x1F4CA;" name="Log Out" arrow="&#8659;" />
    
    </div>
  );
}
