import React from "react";
import banner from "../assets/hero.png";
import playStore from "../assets/playStore.png";
import appStore from "../assets/appStore.png";
import { Link } from "react-router";
import AppCard from "./AppCard";
import useApps from "../Hooks/useApps";

const Home = () => {
  // const applications = useLoaderData();
  const { applications ,loading , error } = useApps();
  // console.log(data)
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
            <button className="btn p-6">
              <img src={playStore} alt="" />
              Google Play
            </button>
          </a>
          <a href="https://www.apple.com/app-store/" target="-blank">
            <button className="btn p-6">
              <img src={appStore} alt="" />
              App Store
            </button>
          </a>
        </div>
        <img className="mx-auto" src={banner} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] space-y-10 text-center p-5 text-white">
        <h1 className="font-bold text-xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 px-10">
          <div>
            <p>Total Downloads</p>
            <h1 className="font-extrabold text-7xl">29.6M</h1>
            <p className="pt-5">21% more than last month</p>
          </div>
          <div>
            <p>Total Reviews</p>
            <h1 className="font-extrabold text-7xl">906K</h1>
            <p className="pt-5">46% more than last month</p>
          </div>
          <div>
            <p>Active Apps</p>
            <h1 className="font-extrabold text-7xl">132+</h1>
            <p className="pt-5">31 more will Launch</p>
          </div>
        </div>
      </div>
      <div className="my-20 text-center space-y-3">
        <h1 className="font-bold text-3xl">Trending Apps</h1>
        <p className="">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-15 mx-30">
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
