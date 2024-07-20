import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  mainPassword: JSON.parse(localStorage.getItem("pass")) || "555",

};

export const CreateUserSlice = createSlice({
  name: "CREATE_USER",
  initialState,
  reducers: {
    createUser(state, action) {
      let user1 = action.payload;
      state.user = user1;
      localStorage.setItem("user", JSON.stringify(user1));
    },
    removeItem(state, action) {
      state.user = [];
      localStorage.removeItem("user")
    },
    newPass (state,action) {
      localStorage.setItem("pass", JSON.stringify(action.payload));
      state.mainPassword = action.payload
    }
  },
});

export const { createUser,removeItem,newPass} = CreateUserSlice.actions;
export default CreateUserSlice.reducer;
