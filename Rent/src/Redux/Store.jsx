
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/authSlice";
import showReducer from './ShowSlice.jsx';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    showData : showReducer ,

  },

});
export default store;
