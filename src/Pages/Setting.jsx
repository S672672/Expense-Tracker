import React from 'react'
import SettingsItems from '../Components/SettingsItems'
import { useLocation } from 'react-router-dom';

export default function Setting() {
  const location = useLocation();
  const isPageActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className='flex items-start justify-center flex-col m-10 p-3'>
    <h1 className='text-3xl font-bold'>Settings</h1>
    <p className='font-bold text-gray-600 text-lg'>Manage your account setting and set email preferences</p>
    <div className='mt-10 flex'>
    <div className='flex flex-col gap-2'>
    <SettingsItems name = "Profile" />
    <SettingsItems name = "Account" />
    <SettingsItems name = "Notifications" />
    <SettingsItems name = "Display" />
    </div>

    </div>
    </div>
  )
}