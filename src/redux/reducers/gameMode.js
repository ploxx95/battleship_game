import { createReducer } from "@reduxjs/toolkit";
import { initDataGame } from "../actions/gameMode";

const gameData = createReducer({}, (builder) => {
  builder.addCase(initDataGame.toString(), (state, action) => {
    const data_game = action.payload;
    return data_game;
  });
});

export default gameData;
