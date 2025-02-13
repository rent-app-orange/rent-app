import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const selectUserId = (state) => state.auth.user?.id;
export const selectUserName = (state) => state.auth.user?.name;
export const selectUserEmail = (state) => state.auth.user?.email;


export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;