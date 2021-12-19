import { configureStore } from "@reduxjs/toolkit";
import boardGenReducer from "./reducers/boardGenerator";
import gameData from "./reducers/gameMode";
export default configureStore({
  reducer: { boardGenReducer, gameData },
});
