import { createAction } from "@reduxjs/toolkit";
import { initialBoard } from "../../helps/boardGenerator";
import { initDataGame } from "./gameMode";

export const boardGenerate = createAction("BOARD_GENERATE");

export const configGame = (dataGame) => (dispatch) => {
  const { row: board, arrcoordinateShips } = initialBoard();
  dispatch(boardGenerate({ board }));
  dispatch(
    initDataGame({
      arrShips: arrcoordinateShips,
      user: dataGame.data.nickname,
      difficult: dataGame.data.numberShifts,
    })
  );
};
