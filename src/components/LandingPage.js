import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4"
      style={{
        backgroundImage: `url('images/wl.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* Content Section */}
      <div className="text-center py-16 bg-black bg-opacity-50 rounded-lg p-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-xl mb-6">
          I am a passionate Frontend Developer with a focus on creating clean and efficient code. I specialize in React.js, Tailwind CSS, and modern web technologies.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/projects">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200">
              Explore My Work
            </button>
          </Link>
          <Link to="/about">
            <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full shadow-lg hover:bg-gray-200">
              About Me
            </button>
          </Link>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold">Skills</h2>
        <p className="mt-2 text-lg">React.js | Redux Toolkit | Tailwind CSS | JavaScript | HTML | CSS</p>
      </div>
      
      {/* Footer Section */}
      <div className="mt-12">
        <p className="text-sm">© 2024 My Portfolio. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default LandingPage;
