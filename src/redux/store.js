import { configureStore } from "@reduxjs/toolkit";
import boardGenReducer from "./reducers/boardGenerator";

export default configureStore({
  reducer: { boardGenReducer },
});
