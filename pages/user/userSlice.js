import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  userImage: "",
  email: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload.user;
      state.userImage = action.payload.userImage;
      state.email = action.payload.email;
    },
    setSignOut: (state) => {
      state.user = null;
      state.userImage = null;
      state.email = null;
    },
  },
});

export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.user;
export const selectUserPhoto = (state) => state.user.userImage;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;
