import { configureStore } from "@reduxjs/toolkit";
import showReducer from './ShowSlice.jsx';

const store = configureStore({
  reducer: {
   
   showData : showReducer ,
  },
});
export default store;
