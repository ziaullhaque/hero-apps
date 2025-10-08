import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>App</a>
              </li>

              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-[30px]" src={logo} alt="" />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
              HERO.IO
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <a className="hover:underline ">Home</a>
            </li>

            <li>
              <a className="hover:underline">App</a>
            </li>

            <li>
              <a className="hover:underline">Installation</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            href="https://github.com/ziaullhaque"
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
