import React from 'react'
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaComments, FaShareAlt } from "react-icons/fa";
export const PostCard = () => {
  return (
    <div className="bg-slate-900 p-2 my-4">
      <div className="flex my-4">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="avatar"
          className=" rounded-full h-14 w-14 "
        />
        <div className="ml-8">
          <h2 className="text-white capitalize">aryan sharma</h2>
          <p className="text-white capitalize">date</p>
        </div>
        <BsThreeDots className="text-white capitalize ml-auto mr-2 mt-2 text-lg" />
      </div>
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="avatar"
        className=" h-80 w-full"
      />
      <p className="text-white my-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur!
      </p>
      <div className="flex justify-around">
        <div className="flex items-center text-xl text-white">
          <AiFillLike />
          <span className="ml-2">0</span>
        </div>
        <div className="flex items-center text-xl text-white">
          <FaComments />
          <span className="ml-2">0</span>
        </div>
        <div className="flex items-center text-xl text-white">
          <FaShareAlt />
        </div>
        <div className="flex items-center text-xl text-white">
          <BsBookmark />
        </div>
      </div>
    </div>
  );
}
