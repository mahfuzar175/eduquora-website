import React from "react";

const Category = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content gap-24 flex-col-reverse lg:flex-row-reverse">

          <div className="grid lg:grid-cols-2 gap-4 ">
            <div className="card w-full h-full lg:w-56 lg:h-48 bg-red-500 text-white">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Development</h2>
    <p>Over 36 Courses</p>
  </div>
</div>
            <div className="card w-full h-full lg:w-56 lg:h-48 bg-yellow-500 text-white">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Design</h2>
    <p>Over 26 Courses</p>
  </div>
</div>
            <div className="card w-full h-full lg:w-56 lg:h-48 bg-green-500 text-white">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Marketing</h2>
    <p>Over 16 Courses</p>
  </div>
</div>
            <div className="card w-full h-full lg:w-56 lg:h-48 bg-blue-500 text-white">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Business</h2>
    <p>Over 50 Courses</p>
  </div>
</div>
          </div>


          <div>
            <h2 className="text-red-500 font-semibold py-4">Checkout All Categories</h2>
            <h1 className="text-7xl font-serif font-bold">Let's Browse All <br/> Categories</h1>
            <p className="py-4">
            Richard McClintock, a Latin scholar from Hampden-Sydney College, <br/> is credited with discovering the source behind the ubiquitous filler text. <br /> In seeing a sample of lorem ipsum, his interest was piqued .
            </p>
            <button className="btn btn-outline font-extrabold text-red-500 hover:bg-red-600 hover:border-none hover:text-white rounded-full">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
