import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

// Action Reducers
const incrementReducer = (state) => {
  state.value += 1;
};

const decrementReducer = (state) => {
  state.value -= 1;
};

const incrementByAmountReducer = (state, action) => {
  state.value += action.payload;
};

// Create Slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmount: incrementByAmountReducer,
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
