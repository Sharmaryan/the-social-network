import React from "react";
import { deletePost } from "../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/modalSlice";
export const EditDeletePostModal = ({ ...post }) => {
  const { _id } = post;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost({ token, _id }));
  };

  const editPostHandler = () => {
    dispatch(showModal(post));
  };
  return (
    <div className="bg-white w-24 absolute right-2 top-12 flex flex-col">
      <button className="capitalize font-bold" onClick={editPostHandler}>
        edit
      </button>
      <button className="capitalize font-bold" onClick={deletePostHandler}>
        delete
      </button>
    </div>
  );
};
