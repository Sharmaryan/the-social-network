import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  posts: [],
  sortBy: "",
};

export const addPost = createAsyncThunk(
  "post/addPost",
  async (
    { postInput, token, firstName, lastName, formattedDate },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios({
        method: "post",
        url: "api/posts",
        headers: { authorization: token },
        data: {
          postData: {
            content: postInput,
            firstName,
            lastName,
            createdAt: formattedDate,
          },
        },
      });
      return response.data;
    } catch (err) {
      rejectWithValue("something went wrong");
    }
  }
);
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "delete",
        url: `api/posts/${_id}`,
        headers: { authorization: token },
      });
      return response.data;
    } catch (err) {
      console.log(err);
      rejectWithValue("something went wrong");
    }
  }
);
export const editPost = createAsyncThunk(
  "post/editPost",
  async ({ postInput, token, _id }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "post",
        url: `api/posts/edit/${_id}`,
        headers: { authorization: token },
        data: { postData: { content: postInput } },
      });
      return response.data;
    } catch (err) {
      rejectWithValue("something went wrong");
    }
  }
);
export const getPost = createAsyncThunk(
  "post/getPost",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "get",
        url: "api/posts",
      });

      return response.data;
    } catch (err) {
      rejectWithValue("something went wrong");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    sortPostsBy: (state, actions) => {
      state.sortBy = actions.payload;
    },
  },
  extraReducers: {
    [addPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
    [editPost.fulfilled]: (state, { payload }) => {
      state.posts = payload.posts;
    },
  },
});

export const postReducer = postSlice.reducer;
export const { sortPostsBy } = postSlice.actions;
