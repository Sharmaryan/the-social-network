import React from "react";
export const PostInput = () => {
  return (
    <div className="bg-slate-900 p-2">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="avatar"
          className=" rounded-full h-14 w-14 "
        />
        <input
          type="text"
          placeholder="Post Karo"
          className="border-2 ml-4 w-full"
        />
      </div>
    </div>
  );
};
