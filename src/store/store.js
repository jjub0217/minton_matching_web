import { configureStore } from "@reduxjs/toolkit";
import matchFormReducer from "../slice/matchFormSlice";
import memberReviewFormReducer from "../slice/memberReviewFormSlice";
import reviewFormReducer from "../slice/reviewFormSlice";
import userReducer from "../slice/userSlice";
export const store = configureStore({
  reducer: {
    reviewForm: reviewFormReducer,
    memberReviewForm: memberReviewFormReducer,
    matchForm: matchFormReducer,
    user: userReducer,
  },
});
