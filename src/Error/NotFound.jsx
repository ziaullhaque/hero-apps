import React from "react";
import notFound from "../assets/App-Error.png";

const NotFound = () => {
  return (
    <div className="mx-auto text-center my-10 space-y-8">
      <img src={notFound} alt="" />

      <h1 className="font-bold text-3xl">OPPS!! APP NOT FOUND</h1>
      <p className="font-semibold">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <button className="btn px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        Go Back!
      </button>
    </div>
  );
};

export default NotFound;
