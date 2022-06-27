import React from "react";
import {Link} from 'react-router-dom';
export const Login = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <form className="flex flex-col justify-center items-center w-96 border-2 border-slate-900 h-96 ">
      <p className="text-2xl mb-2">Login</p>
        <label htmlFor="email">
          <span className="block text-xl mb-2"> Email</span>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="border border-indigo-300"
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="block text-xl mb-2"> Password</span>
          <input
            type="text"
            id="password"
            placeholder="Password"
            className="border border-indigo-300"
          />
        </label>
        <button className="bg-slate-900 mt-4 text-white py-1.5 px-4 w-48">
          Login
        </button>
        <button className="bg-slate-900 mt-4 text-white py-1.5 px-4 w-48">
          Login as Guest
        </button>
        <p className="text-lg mt-2">Don't have an account ? <Link to='/signup' className="underline text-slate-900" >Signup</Link></p>
      </form>
    </div>
  );
};
