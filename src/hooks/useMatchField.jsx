// hooks/useMatchField.jsx
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../slice/matchFormSlice";

export const useMatchField = (key) => {
  const value = useSelector((state) => state.matchForm[key]);
  const dispatch = useDispatch();

  const onChange = useCallback(
    (input) => {
      const newValue =
        typeof input === "object" && input.target ? input.target.value : input;
      dispatch(updateField({ name: key, value: newValue }));
    },
    [dispatch, key]
  );

  return { value, onChange };
};
