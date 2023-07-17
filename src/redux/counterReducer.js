import { dataNumber } from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const initState = {
  value: 0
};

const counterReducer = createReducer(initState, (builder) => {
  builder.addCase(dataNumber, (state, action) => {
    state.value = action.payload;
  });
});

export default counterReducer;
