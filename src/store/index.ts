import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
const store = configureStore({
  reducer: {
    home: homeReducer.reducer,
    entire: entireReducer,
  },
});

export default store;
