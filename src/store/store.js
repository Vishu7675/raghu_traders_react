import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./features/counterslice.js";

const rootReducer = combineReducers({
  count: counterReducer,
});
export const store = configureStore({
  reducer: {
    counter: rootReducer, // Add more reducers if needed
  },
});
