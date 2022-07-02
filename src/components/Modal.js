import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { GrEmoji, GrImage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalSlice";
import { addPost, editPost } from "../features/postSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { setContent } = useSelector((state) => state.modal);
  const [postInput, setPostInput] = useState("");
  const { content, _id } = setContent;

  useEffect(() => {
    setPostInput(content);
  }, [content]);

  const modalCloseHandler = () => {
    dispatch(closeModal());
  };

  const postHandler = (e) => {
    setPostInput(e.target.value);
  };

  const addPostHandler = () => {
    dispatch(addPost({ postInput, token }));
    dispatch(closeModal());
  };

  const updatePostHandler = () => {
    dispatch(editPost({ postInput, token, _id }));
    dispatch(closeModal());
  };

  const cancelModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="fixed w-full h-full bg-black opacity-90 z-50 top-0 flex items-center justify-center">
      <div className="w-96 bg-cyan-900 p-4 ">
        <div className="flex pt-4">
          <p className="capitalize">share something</p>
          <ImCross
            className="ml-auto mr-2 cursor-pointer"
            onClick={modalCloseHandler}
          />
        </div>
        <textarea
          className='"overflow-auto h-24 w-full resize-none'
          value={postInput}
          onChange={postHandler}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <GrEmoji />
          <GrImage />
          <span>0/150</span>
          {content ? (
            <button
              className="capitalize bg-slate-900 text-white px-4 py-2"
              onClick={updatePostHandler}
            >
              update
            </button>
          ) : (
            <button
              className="capitalize bg-slate-900 text-white px-4 py-2"
              onClick={addPostHandler}
            >
              add post
            </button>
          )}
          <button
            className="capitalize bg-slate-900 text-white px-4 py-2"
            onClick={cancelModal}
          >
            cancel
          </button>
        </div>
      </div>
    </div>
  );
};
