import { poppins } from "@/app/layout";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/L0g1gTG/brooke-cagle-g1-Kr4-Ozfoac-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl text-white">
            <h1 className={poppins.className="mb-5 text-5xl md:text-8xl font-extrabold"}>Ready To <br />Learn With Us?</h1>
            <p className="mb-5 font-medium text-xl">
              We are a leading online learning educatioal platform
            </p>
            <div className="flex justify-center items-center gap-4">
            <button className="btn btn-primary border-none text-white rounded-full bg-red-500 hover:bg-red-600">Started Now</button>
            <button className="btn btn-outline text-white hover:bg-white hover:text-black rounded-full">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
