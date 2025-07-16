// src/slice/reviewFormSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewRating: 0,
  review: "",
  photos: [], // 추후 사진 업로드 관리용
};

const reviewFormSlice = createSlice({
  name: "reviewForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    resetForm: (state) => {
      state.reviewRating = 0;
      state.review = "";
      state.photos = [];
    },
  },
});

export const { updateField, setPhotos, resetForm } = reviewFormSlice.actions;
export default reviewFormSlice.reducer;
