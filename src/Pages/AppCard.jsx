import React from "react";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;
  return (
    <div>
      {/* className="max-w-screen-xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12" */}
      <Link
        to={`/applications/${id}`}
        className="card bg-base-100  shadow-sm hover:scale-103 transition ease-in-out "
      >
        <figure className="h-48 overflow-hidden">
          <img className="w-full object-cover" src={image} alt="App" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <div className="bg-[#F1F5E8] gap-2 px-3 py-1 rounded-lg flex items-center">
              <img className="w-[15px]" src={download} alt="" />
              <p className="text-[#2CAA71]">{downloads}</p>
            </div>
            <div className="bg-[#FFF0E1] gap-1 px-3 py-1 rounded-lg flex items-center">
              <img className="w-[15px]" src={rating} alt="" />
              <p className="text-[#FF8811]">{ratingAvg}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;
