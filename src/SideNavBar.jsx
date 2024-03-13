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
    <div className='h-screen w-full md:w-1/4 lg:w-1/6 border-e-2 border-gray-400 py-5'>
    <NavLink to = "/app/dashboard" activeClassName="active">
        <SideNavItems icon="🏠︎" name="Dashboard" arrow=">" isActive={isPageActive('/app/dashboard')} />
        </NavLink>
        <NavLink to="/app/exp" activeClassName="active">
        <SideNavItems icon="📝" name="Add Expense" arrow=">" isActive={isPageActive('/app/exp')} />
        </NavLink>
        <NavLink to="/app/wallet" activeClassName="active">
        <SideNavItems icon="💳" name="Wallet" arrow=">" isActive={isPageActive('/app/wallet')} />
        </NavLink>
        <NavLink to = '/app/expenses' activeClassName='active'>
        <SideNavItems icon="📋" name="your Expenses" arrow=">" isActive={isPageActive('/app/expenses')} />
        </NavLink>
        <NavLink to="/app/profile" activeClassName="active">
        <SideNavItems icon="👤" name="Profile" arrow=">" isActive={isPageActive('/app/profile')} />
        </NavLink>
        <NavLink to = "/app/setting" activeClassName="active">
        <SideNavItems icon="🔧" name="Settings" arrow=">" isActive={isPageActive('/app/setting')}/>
        </NavLink>
        <SideNavItems icon="⟶" name="Log Out" arrow=">" isActive={isPageActive('/app/logout')} onclick={showConfirmationBox} />
        {/* Logout Confirmation Box */}
      {showLogoutConfirmation && (
        <LogoutConfirmation onClose={hideConfirmationBox} />
        )}
    </div>
  );
}
