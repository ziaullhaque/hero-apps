import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-neutral text-white">
        <div className="flex justify-between items-center p-10">
          <div className="flex items-center">
            <img className="w-[30px]" src={logo} alt="" />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
              HERO.IO
            </span>
          </div>
          <div className="flex  items-center gap-3">
            <a>
              <FaXTwitter />
            </a>
            <a>
              <FaLinkedin />
            </a>
            <a>
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className="text-center p-5">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            <span>
              <a href="">HERO.IO </a>
            </span>
            Industries Ltd
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
