import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/authSlice";
import { useLocation } from "react-router-dom";

export const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(form));
  };
  useEffect(() => {
    if (user) {
      navigate(location.state?.from?.pathname ?? "/", { replace: true });
    }
  }, [navigate, user, location]);

  const handleGuestLogin = (e) => {
    e.preventDefault();
    dispatch(login({ username: "sharmaryan", password: "123456789" }));
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form
        className="flex flex-col justify-center items-center w-96 border-2 border-slate-900 h-96 "
        onSubmit={handleLogin}
      >
        <p className="text-2xl mb-2">Login</p>
        <label htmlFor="username">
          <span className="block text-xl mb-2"> User Name</span>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="border border-indigo-300"
            value={form.username}
            name="username"
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="block text-xl mb-2"> Password</span>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            className="border border-indigo-300"
            value={form.password}
            onChange={handleFormChange}
          />
        </label>
        <button
          className="bg-slate-900 mt-4 text-white py-1.5 px-4 w-48"
          type="submit"
        >
          Login
        </button>
        <button
          className="bg-slate-900 mt-4 text-white py-1.5 px-4 w-48"
          onClick={handleGuestLogin}
        >
          Login as Guest
        </button>
        <p className="text-lg mt-2">
          Don't have an account ?{" "}
          <Link to="/signup" className="underline text-slate-900">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};
