import React from "react";

const About = () => {
  return (
    <>
      <div className="text-center mt-7 ">
        <div className=" shadow-emerald-600">
          <h1>login Page</h1>
          <div className="">
            <label htmlFor="login">Email</label>
            <input type="email" className="border-2 ms-5 m-1" />
            <div>
              <label htmlFor="password">Password</label>
              <input type="pasword" className="border-2 ms-3" />
            </div>
            <div className="mt-3">
              <button className="bg-blue-500 m-3 text-white px-2 rounded-2xl">
                login
              </button>
              <button className="bg-red-700  m-3 text-white px-2  rounded-2xl">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
