import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const handleAddProject = async (projectData) => {
  try {
    const response = await api.post('/projects', projectData);
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      console.error('Server responded with an error:', error.response.data);
      console.error('Status code:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error in setting up the request:', error.message);
    }
  }
};
