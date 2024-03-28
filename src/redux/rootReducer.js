import { combineReducers } from "@reduxjs/toolkit";
import user from "./user";

const rootReducer = combineReducers({
  todos: user,
});

export default rootReducer;
