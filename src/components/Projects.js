import React from 'react';
import { useSelector } from 'react-redux';

const Projects = () => {
  const projects = useSelector((state) => state.portfolio.projects);

  return (
    <div className="p-10 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <ul className="mb-4">
              <li><strong>Technologies:</strong> {project.technologies}</li>
              <li><strong>Duration:</strong> {project.duration}</li>
              <li><strong>Role:</strong> {project.role}</li>
            </ul>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
