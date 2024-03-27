// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todoSlice";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
