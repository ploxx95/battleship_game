import { createReducer } from "@reduxjs/toolkit";
import { dataGame } from "../actions/gameMode";

const gameData = createReducer([], (builder) => {
  builder.addCase(dataGame.toString(), (state, action) => {
    const gameInfo = action.payload.data;
    return [...state, gameInfo];
  });
});

export default gameData;
