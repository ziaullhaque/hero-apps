import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import NotFound from "../Error/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ComposedChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  Bar,
  Line,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { applications, loading, error } = useApps();
  const [isInstalled, setIsInstalled] = useState(false);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <NotFound />;

  const app = applications?.find((a) => String(a.id) === id);
  if (!app)
    return (
      <p className="text-center mt-10">
        <NotFound />
      </p>
    );

  const {
    title,
    image,
    companyName,
    size,
    ratingAvg,
    downloads,
    reviews,
    description,
  } = app;

  // useEffect(() => {
  //   const installedList = JSON.parse(localStorage.getItem("installed")) || [];
  //   const isAppInstalled = installedList.some((a) => a.id === app.id);
  //   setIsInstalled(isAppInstalled);
  // }, [app?.id]);

  const handleInstallToggle = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];

    if (isInstalled) return;

    const updatedList = [...existingList, app];
    localStorage.setItem("installed", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success(`${title} installed successfully! ✅`);
  };

  return (
    <div className="px-6 md:px-20 space-y-10 my-10">
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <img
            src={image}
            alt={title}
            className="w-[260px] h-[260px] object-cover rounded-xl border"
          />
        </div>

        <div className="space-y-5">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-gray-500 font-semibold">
            Developed by: <span className="text-[#7941E8]">{companyName}</span>
          </p>
          <div className="border border-gray-300"></div>

          <div className="flex flex-wrap items-center gap-10">
            <div className="space-y-1 text-center">
              <img className="w-[30px] mx-auto" src={download} alt="" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="font-bold text-2xl">
                {downloads.toLocaleString()}
              </h1>
            </div>
            <div className="space-y-1 text-center">
              <img className="w-[30px] mx-auto" src={rating} alt="" />
              <p className="text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-2xl">{ratingAvg}</h1>
            </div>
            <div className="space-y-1 text-center">
              <img className="w-[30px] mx-auto" src={review} alt="" />
              <p className="text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-2xl">{reviews}</h1>
            </div>
          </div>

          <button
            onClick={handleInstallToggle}
            className={`btn ${
              isInstalled
                ? "bg-[#1aeeab] text-black cursor-not-allowed"
                : "bg-[#00D390] text-white hover:bg-[#00b67c]"
            }`}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size})`}
          </button>
        </div>
      </div>

      <div className="border border-gray-300"></div>

      {/* Chart Section */}
      <div className="bg-base-100 border border-gray-200 rounded-xl p-4 h-80">
        <h2 className="font-bold ml-8 mb-2">Rating Distribution</h2>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            layout="vertical"
            data={[...app.ratings].reverse()}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="count" barSize={20} fill="#FF8811" />
            <Line dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="border border-gray-300"></div>

      <div className="pb-10">
        <h1 className="text-xl font-semibold mb-2">Description</h1>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

