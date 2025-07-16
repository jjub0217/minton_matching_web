// hooks/useMatchField.js
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../slice/memberReviewFormSlice";

export const useParticipantField = (key) => {
  const value = useSelector((state) => state.memberReviewForm[key]);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(updateField({ name: key, value: e.target.value }));
    },
    [dispatch, key]
  );

  return { value, onChange };
};
