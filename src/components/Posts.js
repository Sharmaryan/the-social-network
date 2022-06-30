import React from "react";
import { PostInput, PostAdded, SortBy } from "../components";
export const Posts = () => {
  return (
    <div className="col-start-2 col-end-4">
      <PostInput />
      <SortBy />
      <PostAdded />
    </div>
  );
};
