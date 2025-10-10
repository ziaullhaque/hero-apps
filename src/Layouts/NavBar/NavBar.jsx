import React from "react";
import { FaGithub } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";

const NavBar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-5 md:px-15">
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
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/applications">App</NavLink>
              </li>

              <li>
                <NavLink to="/installed">Installation</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex items-center text-xl cursor-pointer">
            <img className="w-[30px]" src={logo} alt="" />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text font-bold">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <NavLink to="/" className="nav-link">
                <IoHomeOutline />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/applications" className="nav-link">
                <FaAppStore />
                App
              </NavLink>
            </li>

            <li>
              <NavLink to="/installed" className="nav-link">
                <MdInstallDesktop />
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            target="_blank"
            href="https://github.com/ziaullhaque"
            className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
          >
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
