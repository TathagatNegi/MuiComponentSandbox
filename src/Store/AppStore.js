import { configureStore } from "@reduxjs/toolkit";
import { MuiDropdownSlice } from "../Slices/MuiDropdownSlice";

//import reducer
let AReducer;

export default configureStore({
  reducer: {
    MuiDropdowns: MuiDropdownSlice.reducer
  }
});
