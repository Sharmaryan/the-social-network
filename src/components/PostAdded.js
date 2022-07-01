import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "./PostCard";
import { getPost } from "../features/postSlice";
export const PostAdded = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
