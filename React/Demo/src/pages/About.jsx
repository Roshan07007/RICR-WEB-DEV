import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl text-center border">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About Me</h1>

        <p className="text-gray-700 leading-7 text-lg">
          Hi, I'm <span className="font-semibold text-black">Roshan</span>, a
          passionate <span className="font-semibold">Web Designer</span> and
          <span className="font-semibold"> B.Tech CSE Student</span>. I love
          creating beautiful, responsive, and user-friendly websites. I also
          create coding content on my YouTube channel and learn full-stack
          development.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">
          Contact Mee
        </button>
      </div>
    </div>
  
);
};

export default About;
