import React from 'react'
import { FaHome, FaUser, FaBookmark, FaCompass } from "react-icons/fa";
export const Sidebar = () => {
  return (
    <div className="col-span-1 bg-slate-900 justify-self-end w-60 sticky top-[5rem] h-[32rem]">
      <div className="flex p-4 items-center">
        <FaHome className="text-lg text-white" />
        <p className="capitalize text-lg  text-white ml-4">home</p>
      </div>
      <div className="flex p-4 items-center">
        <FaCompass className="text-lg text-white" />
        <p className="capitalize text-lg  text-white ml-4">Explore</p>
      </div>
      <div className="flex p-4 items-center">
        <FaBookmark className="text-lg text-white" />
        <p className="capitalize text-lg  text-white ml-4">Bookmark</p>
      </div>
      <div className="flex p-4 items-center">
        <FaUser className="text-lg text-white" />
        <p className="capitalize text-lg  text-white ml-4">Profile</p>
      </div>
    </div>
  );
}
