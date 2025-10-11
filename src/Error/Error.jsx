import React from "react";
import error from "../assets/error-404.png";
import NavBar from "../Layouts/NavBar/NavBar";
import Footer from "../Layouts/Footer/Footer";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="m-auto text-center my-30 space-y-8 ">
        <img className="mx-auto" src={error} alt="" />
        <h1 className="font-bold text-3xl">Oops, page not found!</h1>
        <p className="font-semibold">
          The page you are looking for is not available.
        </p>
        <button className="btn text-white px-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          <Link to="/">Go Back!</Link>
        </button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Error;
