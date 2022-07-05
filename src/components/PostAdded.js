import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./PostCard";
import { getPost } from "../features/postSlice";
export const PostAdded = () => {
  const dispatch = useDispatch();
  const { posts, sortBy } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const sortPostByRecent = () => {
    if (sortBy === "LATEST")
      return [...posts].sort(function (a, b) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    else if (sortBy === "TRENDING")
      return [...posts].sort(function (a, b) {
        return new Date(b.likes.likeCount) - new Date(a.likes.likeCount);
      });
    else
      return [...posts].sort(function (a, b) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
  };

  const getSortPostByRecent = sortPostByRecent();

  return (
    <div>
      {getSortPostByRecent.map((post) => (
        <div key={post._id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
