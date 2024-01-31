import React from "react";
import { MdDeveloperMode } from "react-icons/md";
import { SiMusicbrainz } from "react-icons/si";
import { IoColorPaletteSharp } from "react-icons/io5";
import { TbBusinessplan } from "react-icons/tb";

const Category = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content gap-24 flex-col-reverse lg:flex-row-reverse">
          <div className="grid lg:grid-cols-2 gap-4 ">
            <div className="card w-full h-full lg:w-56 lg:h-56 hover:scale-90 duration-75 bg-red-500 text-white">
              <div className="card-body items-center text-center">
                <h2 className="text-7xl">
                  <MdDeveloperMode />
                </h2>
                <h2 className="card-title">Development</h2>
                <p>Over 36 Courses</p>
              </div>
            </div>
            <div className="card w-full h-full lg:w-56 lg:h-56 hover:scale-90 duration-75 bg-yellow-500 text-white">
              <div className="card-body items-center text-center">
                <h2 className="text-7xl">
                  <IoColorPaletteSharp />
                </h2>
                <h2 className="card-title">Design</h2>
                <p>Over 26 Courses</p>
              </div>
            </div>
            <div className="card w-full h-full lg:w-56 lg:h-56 hover:scale-90 duration-75 bg-green-500 text-white">
              <div className="card-body items-center text-center">
                <h2 className="text-7xl">
                  <SiMusicbrainz />
                </h2>
                <h2 className="card-title">Marketing</h2>
                <p>Over 16 Courses</p>
              </div>
            </div>
            <div className="card w-full h-full lg:w-56 lg:h-56 hover:scale-90 duration-75 bg-blue-500 text-white">
              <div className="card-body items-center text-center">
                <h2 className="text-7xl">
                  <TbBusinessplan />
                </h2>
                <h2 className="card-title">Business</h2>
                <p>Over 50 Courses</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-red-500 font-semibold py-4">
              Checkout All Categories
            </h2>
            <h1 className="text-7xl font-serif font-bold">
              Let's Browse All <br /> Categories
            </h1>
            <p className="py-4">
              Explore our diverse e-learning platform where learning knows no
              bounds. <br /> Immerse yourself in a vast array of subjects and
              courses by effortlessly navigating <br /> through our
              user-friendly interface. Let's browse all categories and embark on
              a journey <br /> of knowledge tailored to your interests and
              aspirations.
            </p>
            <button className="btn btn-outline font-extrabold text-red-500 hover:bg-red-600 hover:border-none hover:text-white rounded-full">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
