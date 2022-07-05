import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { MdRecentActors } from "react-icons/md";
import { sortPostsBy } from "../features/postSlice";
import { useDispatch } from "react-redux";
export const SortBy = () => {
  const dispatch = useDispatch();

  const sortByDateHandler = () => {
    dispatch(sortPostsBy("LATEST"));
  };
  const sortByTrending = () => {
    dispatch(sortPostsBy("TRENDING"));
  };

  return (
    <div className="my-4 flex">
      <span>Sort by:</span>
      <button
        className="bg-slate-900 inline px-2 py-1 mx-4 text-white flex w-40 items-center justify-center"
        onClick={sortByTrending}
      >
        <FiTrendingUp />
        <span className="ml-2"> Trending </span>
      </button>
      <button
        className="bg-slate-900 inline px-2 py-1 mx-4 text-white flex w-40 items-center justify-center"
        onClick={sortByDateHandler}
      >
        <MdRecentActors />
        <span className="ml-2"> Recent </span>
      </button>
    </div>
  );
};
