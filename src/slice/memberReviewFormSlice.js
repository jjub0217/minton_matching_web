// src/slice/memberReviewFormSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMember: "",
  reviewRating: 0,
  review: "",
  selectedGoodPoint: "",
};

const memberReviewFormSlice = createSlice({
  name: "memberReviewForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: (state) => {
      state.selectedMember = "";
      state.reviewRating = 0;
      state.review = "";
      state.selectedGoodPoint = "";
    },
  },
});

export const { updateField, resetForm } = memberReviewFormSlice.actions;
export default memberReviewFormSlice.reducer;
