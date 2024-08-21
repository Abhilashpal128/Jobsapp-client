import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setDatainLoaclstorage } from "../../helper/helper";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);

      const response = await axios.post(`${API_URL}/user/login`, credentials);

      console.log(`response`, response?.data);
      setDatainLoaclstorage("userData", response?.data?.result?.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);

export const RegisterUser = createAsyncThunk(
  `user/loginuser`,
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(`credentials`, credentials);
      const response = await axios.post(
        `${API_URL}/user/createUser`,
        credentials
      );
      console.log(`responsee`, response?.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response?.data?.message);
    }
  }
);
