import React from 'react';
import SideNavItems from './Components/SideNavItems';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import LogoutConfirmation from './Components/LogoutConfirmation';
import { useState } from 'react';

export default function SideNavBar() {
  const location = useLocation();
  const isPageActive = (path) => {
    return location.pathname === path;
  };
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const showConfirmationBox = () => {
    setShowLogoutConfirmation(true);
  };

  const hideConfirmationBox = () => {
    setShowLogoutConfirmation(false);
  };
  return (
    <div className='h-screen w-full md:w-1/4 lg:w-1/6 border-e-2 border-gray-400'>
    <NavLink to = "/app/dashboard" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Dashboard" arrow="&#8659;" isActive={isPageActive('/app/dashboard')} />
        </NavLink>
        <NavLink to="/app/exp" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Add Expense" arrow="&#8659;" isActive={isPageActive('/app/exp')} />
        </NavLink>
        <NavLink to="/app/wallet" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Wallet" arrow="&#8659;" isActive={isPageActive('/app/wallet')} />
        </NavLink>
        <NavLink to = '/app/expenses' activeClassName='active'>
        <SideNavItems icon="&#x1F4CA;" name="your Expenses" arrow="&#8659;" isActive={isPageActive('/app/expenses')} />
        </NavLink>
        <NavLink to="/app/profile" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Profile" arrow="&#8659;" isActive={isPageActive('/app/profile')} />
        </NavLink>
        <NavLink to = "/app/setting" activeClassName="active">
        <SideNavItems icon="&#x1F4CA;" name="Setting" arrow="&#8659;" isActive={isPageActive('/app/setting')}/>
        </NavLink>
        <SideNavItems icon="&#x1F4CA;" name="Log Out" arrow="&#8659;" isActive={isPageActive('/app/logout')} onclick={showConfirmationBox} />
        {/* Logout Confirmation Box */}
      {showLogoutConfirmation && (
        <LogoutConfirmation onClose={hideConfirmationBox} />
        )}
    </div>
  );
}
