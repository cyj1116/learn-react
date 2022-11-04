import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit";
type State = number;

const increment: CaseReducer<State, PayloadAction<number>> = (state, action) =>
  state + action.payload;

const homeSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {},
});

export default homeSlice;
