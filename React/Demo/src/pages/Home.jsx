import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      {/* Hero Section */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Website
      </h1>

      <p className="text-gray-700 text-lg max-w-xl">
        Hi! I'm Roshan, a Web Designer and B.Tech CSE Student. I build modern
        websites using React, Tailwind, JavaScript and I create coding content
        on YouTube.
      </p>

      {/* Button */}
      <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Home;
