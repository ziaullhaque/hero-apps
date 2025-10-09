import React, { useEffect, useState } from "react";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";

const Installed = () => {
  const [sortSize, setSortSize] = useState("none");
  const [installed, setInstalled] = useState([]);
  useEffect(() => {
    const saveList = JSON.parse(localStorage.getItem("installed")) || [];
    if (saveList) setInstalled(saveList);
  }, []);

  const sortedItem = () => {
    if (sortSize === "price-asc") {
      return [...installed].sort((a, b) => a.ratingAvg - b.ratingAvg);
    } else if (sortSize === "price-desc") {
      return [...installed].sort((a, b) => b.ratingAvg - a.ratingAvg);
    } else {
      return installed;
    }
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    let updatedList = existingList.filter((a) => a.id !== id);

    setInstalled(updatedList);
    // setInstalled((prev) => prev.filter((a) => a.id !== id));
    localStorage.setItem("installed", JSON.stringify(updatedList));
  };

  // const sortedApps = React.useMemo(() => {
  //   let sorted = [...installed];

  //   if (sortSize === "price-asc") {
  //     // sorted.sort((a, b) => Number(a.size) - Number(b.size));
  //     sorted.sort((a, b) => parseFloat(a.size) - parseFloat(b.size));
  //   } else if (sortSize === "price-desc") {
  //     // sorted.sort((a, b) => Number(b.size) - Number(a.size));
  //     sorted.sort((a, b) => parseFloat(b.size) - parseFloat(a.size));
  //   }

  //   return sorted;
  // }, [sortSize, installed]);

  return (
    <div className="my-20 mx-20">
      <div className="my-10 text-center space-y-3">
        <h1 className="font-bold text-3xl">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between  items-center my-5">
        <h1 className="text-2xl font-semibold">
          <span className="text-sm text-gray-500">
            ({installed.length}) Apps Found.
          </span>
          Apps Found
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortSize}
            onChange={(e) => setSortSize(e.target.value)}
          >
            <option value="none">Sort By Size</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div className="space-y-3">
        {/* {installed.map((a) => ( */}
        {sortedItem().map((a) => (
          <div key={a.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img
                className="w-40 h-28 object-cover"
                src={a.image}
                alt={a.title}
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{a.title}</h3>
              <p className="text-base-content/70 flex  items-center space-x-3">
                <div className="space-y-1 flex items-center space-x-1">
                  <img className="w-[15px]" src={download} alt="" />
                  <h1 className="text-[#2CAA71]">{a.downloads}</h1>
                </div>
                <div className="space-y-1 flex items-center space-x-1">
                  <img className="w-[15px]" src={rating} alt="" />
                  <h1 className="text-[#FF8811]">{a.ratingAvg}</h1>
                </div>
                <div className="space-y-1">
                  <h1 className="">{a.size}</h1>
                </div>
              </p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleRemove(a.id)}
                className="btn btn-outline"
              >
                Uninstalled
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installed;
