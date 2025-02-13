import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.jsx";
import showReducer from "./ShowSlice.jsx";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    showData: showReducer,
  },
});
export default store;
