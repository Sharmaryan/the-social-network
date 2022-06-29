import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../features/authSlice";

export const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(signUp(form));
  };

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        className="flex flex-col justify-center items-center w-96 border-2 border-slate-900  "
        onSubmit={handleSignUp}
      >
        <p className="text-2xl mb-2">Signup</p>
        <label htmlFor="email">
          <span className="block text-xl mb-2"> Email</span>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="border border-indigo-300"
            name="email"
            value={form.email}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="first-name" className="block">
          <span className="block text-xl mb-2"> First Name</span>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            className="border border-indigo-300"
            name="firstName"
            value={form.firstName}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="last-name" className="block">
          <span className="block text-xl mb-2"> Last Name</span>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            className="border border-indigo-300"
            name="lastName"
            value={form.lastName}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="user-name" className="block">
          <span className="block text-xl mb-2"> User Name</span>
          <input
            type="text"
            id="user-name"
            placeholder="User Name"
            className="border border-indigo-300"
            name="username"
            value={form.username}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="block text-xl mb-2"> Password</span>
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="border border-indigo-300"
            name="password"
            value={form.password}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="confirm-password" className="block">
          <span className="block text-xl mb-2"> Confirm Password</span>
          <input
            type="text"
            id="confirm-password"
            placeholder="Confirm Password"
            className="border border-indigo-300"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleFormChange}
          />
        </label>
        <button
          className="bg-slate-900 mt-4 text-white py-1.5 px-4 w-48"
          type="submit"
        >
          Signup
        </button>
        <p className="text-lg mt-2">
          Already a user ?{" "}
          <Link to="/login" className="underline text-slate-900">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
