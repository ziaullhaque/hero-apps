import React, { useEffect, useState } from "react";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

const Installed = () => {
  const [sortSize, setSortSize] = useState("none");
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installed")) || [];
    setInstalled(saveList);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("installed")) || [];
      setInstalled(updated);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleRemove = (id, title) => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    const updatedList = existingList.filter((a) => a.id !== id);
    setInstalled(updatedList);
    localStorage.setItem("installed", JSON.stringify(updatedList));
    toast.success(`${title} Unistalled `);
  };

  // const sortedItem = () => {
  //   if (sortSize === "price-asc")
  //     return [...installed].sort((a, b) => a.ratingAvg - b.ratingAvg);
  //   else if (sortSize === "price-desc")
  //     return [...installed].sort((a, b) => b.ratingAvg - a.ratingAvg);
  //   else return installed;
  // };
  const sortedItem = () => {
    if (sortSize === "price-desc") {
      return [...installed].sort(
        (a, b) => parseFloat(a.downloads) - parseFloat(b.downloads)
      );
    } else if (sortSize === "price-asc") {
      return [...installed].sort(
        (a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)
      );
    } else {
      return installed;
    }
  };

  if (!installed.length)
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

  return (
    <div className="my-20 mx-20">
      <Toaster position="top-right" />
      <div className="my-10 text-center space-y-3">
        <h1 className="font-bold text-3xl">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center my-5">
        <h1 className="text-2xl font-semibold">
          <span>({installed.length}) Apps Found</span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortSize}
            onChange={(e) => setSortSize(e.target.value)}
          >
            <option value="none">Sort By Rating</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {sortedItem().map((a) => (
          <div
            key={a.id}
            className="card card-side bg-base-100 shadow border p-3"
          >
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{a.title}</h3>
              <p className="text-base-content/70 flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <img className="w-[15px]" src={download} alt="" />
                  <span className="text-[#2CAA71]">{a.downloads}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <img className="w-[15px]" src={rating} alt="" />
                  <span className="text-[#FF8811]">{a.ratingAvg}</span>
                </div>
                <span>{a.size}</span>
              </p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleRemove(a.id, a.title)}
                className="btn btn-outline"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installed;
