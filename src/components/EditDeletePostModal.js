import React from "react";
import { deletePost } from "../features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../features/modalSlice";
export const EditDeletePostModal = ({ post, setShowEditDeleteModal }) => {
  const { _id } = post;
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const deletePostHandler = () => {
    dispatch(deletePost({ token, _id }));
    setShowEditDeleteModal(false);
  };
 
  const editPostHandler = () => {
    dispatch(showModal(post));
    setShowEditDeleteModal(false);
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
