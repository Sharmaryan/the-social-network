import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async (login, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", login);
      localStorage.setItem("token", data.encodedToken);
      return data;
    } catch (err) {
      return rejectWithValue("invalid login credentials");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.foundUser;
      state.isLoading = false;
      state.error = "";
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const authReducer = authSlice.reducer;
