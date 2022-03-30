import { createSlice } from "@reduxjs/toolkit";

export const MuiDropdownSlice = createSlice({
  name: "MuiDropdownSlice",
  initialState: {
    DropdownStates: {
      NameDropdownValue: { value: "" },
      NameMultipleDropdownValue: { value: [] }
    }
  },
  reducers: {
    changeNameDropdownValue: (state, action) => {
      state.DropdownStates.NameDropdownValue.value = action.payload;
    },
    changeNameMultipleDropdownValue: (state, action) => {
      state.DropdownStates.NameMultipleDropdownValue.value = action.payload;
    }
  }
});
