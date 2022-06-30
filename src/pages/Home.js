import React from "react";
import { Sidebar, Posts, SuggestedUsers } from "../components";
export const Home = () => {
  return (
    <div className="p-2 mt-4 grid grid-cols-4 gap-x-4">
      <Sidebar />
      <Posts />
      <SuggestedUsers />
    </div>
  );
};
