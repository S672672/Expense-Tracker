import React from "react";
import Activities from "../Components/Activities";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center m-5 p-3">
      <div className="flex flex-col items-center w-full max-w-screen-lg md:w-5/12">
        <div className="h-36 w-36 bg-green-400 rounded-full m-2"></div>
        <div className="font-black text-2xl">HackEath Software</div>
        <div className="font-bold text-gray-400">Software Company</div>
        <div className="h-12 w-full bg-black rounded-md mt-4 text-white flex items-center justify-center">
          <h1 className="font-bold text-xl">Connect with @hackeath</h1>
        </div>
        <div className="h-12 w-full bg-gray-100 rounded-md mt-2 text-black flex items-center justify-around font-bold text-lg">
          <ul className="flex w-full md:w-4/5 justify-between items-center flex-wrap">
            <li className="flex-1 text-center cursor-pointer hover:text-gray-400 mb-2 md:mb-0">Facebook</li>
            <li className="flex-1 text-center cursor-pointer hover:text-gray-400 mb-2 md:mb-0">Twitter</li>
            <li className="flex-1 text-center cursor-pointer hover:text-gray-400 mb-2 md:mb-0">Instagram</li>
            <li className="flex-1 text-center cursor-pointer hover:text-gray-400 mb-2 md:mb-0">Email</li>
          </ul>
        </div>
      </div>
      <div className="recent-activities w-full max-w-screen-lg md:w-5/12">
        <h1 className="my-5 font-black text-2xl">Recent Activities</h1>
        <Activities doneActivity="updated profile" timeAgo="20 min ago" />
        <Activities doneActivity="updated status" timeAgo="23 min ago" />
        <Activities doneActivity="posted new article" timeAgo="1 hour ago" />
      </div>
    </div>
  );
}

export default Profile;
