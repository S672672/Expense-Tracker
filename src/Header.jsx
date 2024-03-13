import React, { useState } from 'react';
import HeadItems from './Components/HeadItems';
import Notifications from './NavBarActivities/Notifications';
import Search from './NavBarActivities/Search';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [search, setSearch] = useState(false);

  const toggleSearch = () => {
    setShowNotifications(false);
    setSearch(!search);
  };

  const toggleNotifications = () => {
    setSearch(false);
    setShowNotifications(!showNotifications);
  };

  return (
    <div className='h-16 flex items-center justify-between px-4 w-full border-b-1 bg-white'>
      <div className='font-bold text-2xl text-blue-700'>ExP</div>
      <div className='flex items-end justify-around gap-4'>
        <HeadItems image="../src/assets/setting.png" />
        <div onClick={toggleSearch}>
          <HeadItems image="../src/assets/search.jpg" />
        </div>
        <div onClick={toggleNotifications}>
          <HeadItems image="../src/assets/bell.png" />
        </div>
        <HeadItems image="../src/assets/profile.png" />
      </div>
      {showNotifications && <Notifications />}
      {search && <Search toggleSearch={toggleSearch} />}
    </div>
  );
}
