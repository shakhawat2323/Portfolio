import React from "react";
import { Link } from "react-router";

const Nabar = () => {
  const navbars = (
    <>
      <li className=" list  bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝙃𝙤𝙢𝙚
        </Link>
      </li>
      <li className=" list bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝙎𝙚𝙧𝙫𝙞𝙘𝙚𝙨
        </Link>
      </li>
      <li className=" list bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝙎𝙠𝙞𝙡𝙡𝙨
        </Link>
      </li>
      <li className=" list bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨
        </Link>
      </li>
      <li className=" list bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝘼𝙗𝙤𝙪𝙩
        </Link>
      </li>
      <li className=" list bg-gray-900 text-white">
        <Link
          className="relative text-xl font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 
        hover:after:w-full"
        >
          𝘾𝙤𝙣𝙩𝙖𝙘𝙩
        </Link>
      </li>
    </>
  );
  return (
    <div
      className="navbar  border-b-1 border-[
rgb(240, 240, 240)] shadow-sm w-11/12 mx-auto py-3"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navbars}
          </ul>
        </div>
        <Link>
          <div className="flex items-center">
            <div>
              <img className="w-20 h-16 " src="/src/assets/smsm.png" alt="" />
            </div>
            <div>
              <h1 className="text-4xl sm:hidden lg:block font-semibold">
                ̷S̷̷h̷a̷̷k̷̷h̷a̷̷w̷a̷̷t̷
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex lg:ml-32">
        <ul className="menu menu-horizontal px-1">{navbars}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn ">Button</a>
      </div>
    </div>
  );
};

export default Nabar;
