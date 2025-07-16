import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  capacity: "4",
  date: "",
  place: "",
  level: "초심",
};

const matchFormSlice = createSlice({
  name: "matchForm",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm: () => ({ ...initialState }),
  },
});

export const { updateField, resetForm } = matchFormSlice.actions;
export default matchFormSlice.reducer;
