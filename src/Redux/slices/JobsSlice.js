import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
  },
  reducers: {
    jobs: (state, action) => {
      state.jobs = action.payload;
    },
  },
});

export const { jobs } = jobsSlice.actions;
export default jobsSlice.reducer;
