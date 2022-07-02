import React, { useState } from "react";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaComments, FaShareAlt } from "react-icons/fa";
import { EditDeletePostModal } from "./EditDeletePostModal";
import { useSelector } from "react-redux";

export const PostCard = ({ ...post }) => {
  const {_id,username, content} = post;
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.auth);

  const editDeletePostModalHandler = (_id) => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="bg-slate-900 p-2 my-4 relative">
      <div className="flex my-4 ">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="avatar"
          className=" rounded-full h-14 w-14 "
        />
        <div className="ml-8">
          <h2 className="text-white capitalize">aryan sharma</h2>
          <p className="text-white">@{username}</p>
        </div>
        {showModal && <EditDeletePostModal {...post} />}
        {user.user.username === username && (
          <BsThreeDots
            className="text-white capitalize ml-auto mr-2 text-lg cursor-pointer"
            onClick={() => editDeletePostModalHandler(_id)}
          />
        )}
      </div>
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        alt="avatar"
        className=" h-80 w-full"
      />
      <p className="text-white my-2">{content}</p>
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
};
