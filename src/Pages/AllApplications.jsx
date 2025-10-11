import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router";

const AllApplications = () => {
  const { applications } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? applications.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : applications;
  console.log(searchApps);
  return (
    <div>
      <div className="my-20 text-center space-y-3">
        <h1 className="font-bold text-3xl">Our All Applications </h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="md:flex justify-between mx-10 text-center space-y-5 items-center">
        <h1 className="text-2xl font-semibold">
          <span className="">
            {/* text-sm text-gray-500 */}({searchApps.length}) Apps Found
          </span>
        </h1>
        <label className="input">
          <CiSearch />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
          {/* <button className="btn btn-outline">Search</button> */}
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-15 md:mx-10 mx-3">
        {/* <h3>App : {applications.length}</h3> */}

        {searchApps.length > 0 ? (
          searchApps.map((app) => <AppCard key={app.id} app={app} />)
        ) : (
          <div className="col-span-full text-center py-5 space-y-15">
            <h2 className="text-6xl font-semibold text-gray-500">
              No Apps Found
            </h2>
            <button
              onClick={() => (window.location.href = "/applications")}
              className="btn text-white px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
            >
              <Link to="/applications">Show All Apps</Link>
            </button>
          </div>
        )}

        {/* {searchApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))} */}
      </div>
    </div>
  );
};

export default AllApplications;
