import React, { useState } from "react";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import { Link } from "react-router";
import {
  loadInstall,
  uninstalledAppsFromInstalled,
} from "../Utilitis/localStorege.js";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Installed = () => {
  const [installedApp, setInstalledApp] = useState(loadInstall);

  const [sortAllApps, setSortAllApps] = useState("");

  if (!installedApp.length)
    return (
      <div className="col-span-full text-center my-45 space-y-10">
        <h2 className="text-6xl font-semibold text-gray-500">
          No Apps Install !
        </h2>
        <button
          onClick={() => (window.location.href = "/applications")}
          className="btn text-white px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <Link to="/applications">Show All Apps</Link>
        </button>
      </div>
    );

  const sortedApp = (() => {
    if (sortAllApps === "size-desc") {
      return [...installedApp].sort(
        (a, b) => parseInt(b.size) - parseInt(a.size)
      );
    } else if (sortAllApps === "size-asc") {
      return [...installedApp].sort(
        (a, b) => parseInt(a.size) - parseInt(b.size)
      );
    } else {
      return installedApp;
    }
  })();

  
  const handleUninstall = (id) => {
    uninstalledAppsFromInstalled(id);
    setInstalledApp((prev) => prev.filter((app) => app.id !== id));
    Swal.fire({
      title: "Thank You",
      text: "Your app Uninstalled successfully",
      icon: "success",
    });
  };

  return (
    <div className="">
      <div className="xl:lg:md:p-10 xl:lg:md:m-30 p-5 m-5">
        <div>
          <div className="text-center">
            <h1 className="xl:lg:md:text-4xl font-bold mb-4">
              Your Installed Apps
            </h1>
            <p className="text-gray-500 text-lg">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex justify-between my-5 items-center">
            <h1 className=" text-2xl font-semibold">
              ({sortedApp.length}) Apps Found
            </h1>

            <label className="form-control w-full max-w-xs">
              <select
                className="select select-bordered"
                value={sortAllApps}
                onChange={(e) => setSortAllApps(e.target.value)}
              >
                <option value="none">Sort By Size</option>
                <option value="size-desc">High-&gt;Low</option>
                <option value="size-asc">Low-&gt;High</option>
              </select>
            </label>
          </div>
        </div>

        <div className="space-y-8">
          {sortedApp.map((a) => (
            <div
              key={a.id}
              className="xl:lg:flex md:flex card-side bg-base-100 shadow-lg xl:lg:md:p-3"
            >
              <figure>
                <img
                  className="xl:lg:w-30 md:w-20   p-2 rounded-2xl object-cover"
                  src={a.image}
                  alt={a.title}
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Name : {a.title}</h3>
                <div className="flex gap-10 ">
                  <span className="flex items-center text-lg font-bold text-green-500 gap-2">
                    <img src={download} alt="" />
                    {a.downloads}
                  </span>
                  <span className="flex items-center text-lg font-bold text-[#FF8811]  gap-2">
                    <img src={rating} alt="" /> {a.ratingAvg}
                  </span>
                  <span className="flex items-center text-lg font-bold">
                    {a.size}
                  </span>
                </div>
              </div>
              <div className="p-5 flex items-center gap-3">
                <button
                  onClick={() => handleUninstall(a.id)}
                  className="btn bg-[#00D390] text-white text-lg font-bold"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installed;
