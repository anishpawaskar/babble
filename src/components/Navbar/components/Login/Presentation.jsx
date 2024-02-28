import React from 'react';
import { Link } from 'react-router-dom';

export const LoginPresentation = ({
  handleEmail,
  handlePassword,
  handleLogin,
}) => {
  return (
    <div className="relative">
      <img
        className="w-screen h-screen object-cover"
        src="/images/auth-background.png"
        alt="illustation"
      />
      <div className="flex flex-col items-center gap-3 absolute ori top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[25rem] h-[31.25rem] bg-[--primary-color] rounded p-[1.625rem]">
        <div className="flex text-[--white-color] text-center flex-col gap-[0.3rem]">
          <h2 className="text-2xl">Welcome back!</h2>
          <p className="text-sm tracking-wide">
            We are so exicted to see you again!
          </p>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <label
            className="text-[--white-color] text-[0.70rem] font-semibold leading-none uppercase"
            htmlFor="email"
          >
            Email or username
            <input
              onChange={(e) => handleEmail(e)}
              className="w-full h-8 rounded-sm mt-2 text-black text-[0.93rem] font-normal focus:outline-none px-2 py-3"
              type="text"
              required
            />
          </label>
          <label
            className="text-[--white-color] text-[0.70rem] font-semibold leading-none uppercase"
            htmlFor="password"
          >
            Password
            <input
              onChange={(e) => handlePassword(e)}
              className="w-full h-8 rounded-sm mt-2 text-black text-[0.93rem] font-normal focus:outline-none px-2 py-3"
              type="password"
              required
            />
          </label>
          <button
            onClick={handleLogin}
            className="text-[--white-color] w-full text-base bg-[--secondary-color] p-2 rounded font-semibold"
          >
            Login
          </button>
        </form>
        <p className="text-[--white-color] font-semibold text-[0.87rem] uppercase">
          Or
        </p>
        <div className="w-full">
          <p className="text-[--white-color] text-sm text-left">
            Need an account?{' '}
            <span className="text-[--secondary-color] font-semibold">
              <Link to="/register">Register</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
