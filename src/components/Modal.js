import React, { useState, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { GrEmoji, GrImage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modalSlice";
import { addPost, editPost } from "../features/postSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  const {user:{firstName, lastName}, token} = useSelector((state) => state.auth);
  const { setContent } = useSelector((state) => state.modal);
  const [postInput, setPostInput] = useState("");
  const { content, _id } = setContent;

  const changeButtonColor =
    postInput === undefined || postInput.length === 0
      ? "bg-slate-500 text-black"
      : "bg-slate-900 text-white";

  const disableButton = postInput === undefined || postInput.length === 0;

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
    dispatch(addPost({ postInput, token, firstName, lastName }));
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
          className='overflow-auto h-24 w-full resize-none'
          value={postInput}
          onChange={postHandler}
          maxLength={150}
        ></textarea>
        <div className="flex justify-between items-center mt-4">
          <GrEmoji />
          <GrImage />
          <span>
            {postInput === undefined ? 150 : `${150 - postInput.length}`}/150
          </span>
          {content ? (
            <button
              onClick={updatePostHandler}
              className={`capitalize px-4 py-2 ${changeButtonColor}`}
              disabled={disableButton}
            >
              update
            </button>
          ) : (
            <button
              className={`capitalize px-4 py-2 ${changeButtonColor}`}
              onClick={addPostHandler}
              disabled={disableButton}
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
