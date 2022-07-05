import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModalOpen: false,
  setContent: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.isModalOpen = true;
      if (action.payload) state.setContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    emptyContent: (state) => {
      state.setContent = '';
    }
  },
});

export const modalReducer = modalSlice.reducer;
export const { showModal, closeModal, emptyContent } = modalSlice.actions;
