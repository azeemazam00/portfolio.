import React, { useState } from 'react';
import { handleAddProject } from '../utils/api';  // Import the function

const AddProject = () => {
  const [projectData, setProjectData] = useState({ name: '', description: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleAddProject(projectData); // Use the function
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={projectData.name}
        onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
        placeholder="Project Name"
        required
      />
      <textarea
        value={projectData.description}
        onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
        placeholder="Project Description"
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProject;
