import React from 'react';

const About = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg border border-blue-300">
        {/* Name and Image Section */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="images/azeem.jpg"  // Replace with the correct path to your image
            alt="Muhammad Azeem"
            className="w-32 h-32 rounded-full mb-4 shadow-lg"
          />
          <h1 className="text-3xl font-extrabold text-blue-900">Muhammad Azeem</h1>
          <p className="text-xl text-gray-700">Software Engineer</p>
        </div>

        <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-900">About Me</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          I'm a passionate frontend developer with a strong background in building responsive and
          dynamic web applications. I specialize in React.js, Tailwind CSS, and Redux Toolkit, and
          I have a deep understanding of creating clean, efficient, and scalable code. My goal is
          to deliver high-quality user experiences through intuitive interfaces and seamless
          interactions.
        </p>
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Skills</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>React.js & Redux Toolkit</li>
          <li>Tailwind CSS & Styled Components</li>
          <li>JavaScript (ES6+), HTML5, CSS3</li>
          <li>Responsive Design & Mobile-First Development</li>
          <li>API Integration & Rapid API</li>
          <li>Version Control with Git & GitHub</li>
        </ul>
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Experience</h3>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Over the past few years, I've worked on a variety of projects ranging from small personal
          websites to large-scale web applications. My experience has taught me the importance of
          writing maintainable code, collaborating with cross-functional teams, and continuously
          learning new technologies to stay ahead in the fast-paced world of web development.
        </p>
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Education</h3>
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          I hold a degree in Software Engineering, where I gained a solid foundation in programming
          principles, data structures, and algorithms. My education, combined with hands-on
          experience, has equipped me with the skills necessary to tackle complex development
          challenges.
        </p>
        <h3 className="text-2xl font-semibold text-blue-800 mb-4">Hobbies & Interests</h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          When I'm not coding, I enjoy exploring the latest web technologies, contributing to open-source
          projects, and engaging with the developer community. I also love traveling, photography, and
          spending time in nature.
        </p>
      </div>
    </div>
  );
};

export default About;
