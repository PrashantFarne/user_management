import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userList: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const addUserListData = () => async (dispatch) => {
  try {
    const response = await axios.get("https://reqres.in/api/users?page=2");
    if (response) {
      dispatch(addUserList(response.data.data));
    } else {
      console.error();
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const { addUserList } = user.actions;
export default user.reducer;
