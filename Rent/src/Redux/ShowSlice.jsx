import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  name: "",
  description: "",
  location: "",
  price: "",
  images: [],
  video: null,
  thumbnail: null,
  availability: false,
  approve: false,
  payment: false,
};

const showSlice = createSlice({
  name: "showData",
  initialState,
  reducers: {},
});

// export const [ حطو الاكشن تاعيتكم] = showSlice.actions;
export default showSlice.reducer;
