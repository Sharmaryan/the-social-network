import React from "react";
import { useSelector } from "react-redux";
import { Sidebar, Posts, SuggestedUsers, Modal } from "../components";
export const Home = () => {
  const {isModalOpen} =  useSelector((state) => state.modal);

  return (
    <div className="mt-16 pt-4 grid grid-cols-4 gap-x-4 relative">
      <Sidebar />
      <Posts />
      <SuggestedUsers />
     {isModalOpen && <Modal/>}
    </div>
  );
};
