import React from "react";
import banner from "../assets/hero.png";
import playStore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import { Link } from "react-router";
import AppCard from "./AppCard";
import useApps from "../Hooks/useApps";
import { IoMdTrendingUp } from "react-icons/io";
import { IoDownload } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Home = () => {
  const { applications } = useApps();
  const featuredApp = applications.slice(0, 8);
  console.log(applications);
  return (
    <div className="my-20">
      <div className="text-center m-auto  space-y-8 ">
        <h1 className="font-bold text-5xl">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block text-transparent bg-clip-text">
            Productive
          </span>
          <span> Apps</span>
        </h1>
        <p>
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="space-x-5">
          <a
            href="https://play.google.com/store/games?device=windows"
            target="-blank"
          >
            <button className="btn p-6 bg-white hover:shadow-2xl">
              <img src={playStore} alt="" />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="-blank">
            <button className="btn p-6 bg-white hover:shadow-2xl">
              <img src={appStore} alt="" />
              App Store
            </button>
          </a>
        </div>
        <img className="mx-auto" src={banner} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] space-y-10 text-center p-5 text-white">
        <h1 className="font-bold text-4xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="md:flex justify-center gap-20 ">
          <div>
            <p>Total Downloads</p>
            <h1 className="font-extrabold text-5xl flex justify-center items-center  gap-5">
              29.6M <IoDownload />
            </h1>
            <p className="pt-5">21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-5xl flex justify-center items-center  gap-5">
              906K <FaStar />
            </h1>
            <p className="pt-5">46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="font-extrabold text-5xl flex justify-center items-center  gap-5">
              132+ <BiLogoPlayStore />
            </h1>
            <p className="pt-5">31 more will Launch</p>
          </div>
        </div>
      </div>
      <div className="my-20 text-center space-y-3">
        <h1 className="font-bold text-3xl flex justify-center items-center gap-3">
          Trending Apps
          <span>
            <IoMdTrendingUp />
          </span>
        </h1>

        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-15 md:mx-30 mx-3">
        {/* <h3>App : {applications.length}</h3> */}

        {featuredApp.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
      <div className="text-center ">
        <button className="btn text-white px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <Link to="/applications">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
