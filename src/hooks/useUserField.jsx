// hooks/useMatchField.js
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../slice/userSlice";

export const useUserField = (key) => {
  const value = useSelector((state) => state.user.formData[key]);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      dispatch(updateField({ name: key, value: e.target.value }));
    },
    [dispatch, key]
  );

  return { value, onChange };
};
