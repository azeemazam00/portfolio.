import { createSlice } from '@reduxjs/toolkit';

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    projects: [],
    user: null,
  },
  reducers: {
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addProject, setUser } = portfolioSlice.actions;
export default portfolioSlice.reducer;
