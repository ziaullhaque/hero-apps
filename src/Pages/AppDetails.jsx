import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import rating from "../assets/icon-ratings.png";
import download from "../assets/icon-downloads.png";
import review from "../assets/icon-review.png";
import NotFound from "../Error/NotFound";
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
  // const {
  //   title,
  //   image,
  //   companyName,
  //   size,
  //   ratingAvg,
  //   downloads,
  //   reviews,
  //   description,
  //   ratings,
  // } = app;

  const { id } = useParams();
  const { applications, loading, error } = useApps();

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <NotFound></NotFound>;

  const app = applications?.find((a) => String(a.id) === id);
  // const app = applications?.find((a) => a.id === Number(id));
  // console.log("App ID:", id);
  // console.log("Found App:", app);

  // if (!app) return <p className="text-center mt-10">App not found!</p>;

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

  const handleAddToInstalled = () => {
    const existingList = JSON.parse(localStorage.getItem("installed")) || [];
    // const existingList = localStorage.getItem("installed");
    // console.log(existingList);
    // console.log(JSON.parse(existingList));

    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((a) => a.id === app.id);
      if (isDuplicate) return alert("Sorry Vai");
      updatedList = [...existingList, app];
    } else {
      updatedList.push(applications);
    }

    localStorage.setItem("installed", JSON.stringify(updatedList));
  };
  // const handleAddToInstalled = () => {
  //   const existingList = JSON.parse(localStorage.getItem("installed")) || [];

  //   const alreadyInstalled = existingList.some((item) => item.id === app.id);
  //   if (alreadyInstalled) {
  //     alert("This app is already installed!");
  //     return;
  //   }

  //   const updatedList = [...existingList, app];

  //   localStorage.setItem("installed", JSON.stringify(updatedList));

  //   alert("App installed successfully!");
  // };

  return (
    <div className="px-20 space-y-10 my-15">
      <div className="flex gap-10">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-3xl">{title}</h1>
          <p className="text-gray-500 font-semibold">
            Developer By : <span className="text-[#7941E8]">{companyName}</span>
          </p>
          <div className="border border-gray-300"></div>
          <div className="flex items-center gap-10">
            <div className="space-y-1">
              <img className="w-[30px]" src={download} alt="" />
              <p className=" text-gray-500">Downloads</p>
              <h1 className="font-bold text-4xl">{downloads}</h1>
            </div>
            <div className="space-y-1">
              <img className="w-[30px]" src={rating} alt="" />
              <p className=" text-gray-500">Average Ratings</p>
              <h1 className="font-bold text-4xl">{ratingAvg}</h1>
            </div>
            <div className="space-y-1">
              <img className="w-[30px]" src={review} alt="" />
              <p className=" text-gray-500">Total Reviews</p>
              <h1 className="font-bold text-4xl">{reviews}</h1>
            </div>
          </div>
          <button
            onClick={handleAddToInstalled}
            className="btn bg-[#00D390] text-white"
          >
            Install Now ({size})
          </button>
        </div>
      </div>
      <div className="border border-gray-300"></div>
      {/* Chart */}
      <div>
        <div className="bg-base-100 border border-gray-200 rounded-xl p-4 h-80">
          <h2 className="font-bold ml-8">Ratting</h2>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              // data={app.ratings}
              data={[...app.ratings].reverse()}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
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
      </div>
      <div className="border border-gray-300"></div>
      <div>
        <h1>Description</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
