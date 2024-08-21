import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import jobsReducer from "./slices/JobsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
  },
});

export default store;
