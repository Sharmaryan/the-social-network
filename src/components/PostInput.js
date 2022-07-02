import React from "react";
import { useDispatch } from "react-redux";
import { showModal, emptyContent } from "../features/modalSlice";
export const PostInput = () => {
  const dispatch  = useDispatch();

  const clickHandler = () => {
    dispatch(showModal());
    dispatch(emptyContent());
  };

  return (
    <div className="bg-slate-900 p-2">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="avatar"
          className=" rounded-full h-14 w-14 "
        />
        <div
          className="border-2 ml-4 w-full bg-white capitalize cursor-pointer"
          onClick={clickHandler}
        >
          what is in your mind?
        </div>
      </div>
    </div>
  );
};
