// hooks/useReviewField.jsx
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../slice/reviewFormSlice";

export const useReviewField = (key) => {
  const value = useSelector((state) => state.reviewForm[key]);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(updateField({ name: key, value: e.target.value }));
    },
    [dispatch, key]
  );

  return { value, onChange };
};
