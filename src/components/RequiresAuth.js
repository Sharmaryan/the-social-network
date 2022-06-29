import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const { user: isLoggedIn } = useSelector((state) => state.auth);

  return isLoggedIn ? (
    children
  ) : (
    <Navigate state={{ from: location }} to="/login" replace />
  );
};
