import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppCard from "./AppCard";

const AllApplications = () => {
  const { applications } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? applications.filter(app => app.title.toLocaleLowerCase().includes(term))
    : applications;
  console.log(searchApps);
  return (
    <div>
      <div className="my-20 text-center space-y-3">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between mx-10 items-center">
        <h1 className="text-2xl font-semibold">
          <span className="text-sm text-gray-500">
            ({searchApps.length}) Apps Found.
          </span>
          Apps Found
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
          />
          {/* <button className="btn btn-outline">Search</button> */}
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-15 mx-10">
        {/* <h3>App : {applications.length}</h3> */}

        {searchApps.map((app) => (
          <AppCard key={app.id} app={app}></AppCard>
        ))}
      </div>
    </div>
  );
};

export default AllApplications;
