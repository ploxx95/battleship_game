import { createAction } from "@reduxjs/toolkit";
import { initialBoard } from "../../helps/boardGenerator";

export const boardGenerate = createAction("BOARD_GENERATE");

export const configGame = (dataGame) => (dispatch) => {
  const { row: board, arrCoordinatesOrder } = initialBoard(dataGame);
  dispatch(boardGenerate({ board }));
};
