import { createReducer } from "@reduxjs/toolkit";
import { initialBoard } from "../../helps/boardGenerator";
import { boardGenerate } from "../actions/boardGenerator";

const boardGenReducer = createReducer([], (builder) => {
  builder.addCase(boardGenerate.toString(), (state, action) => {
    const arrMain = action.payload.board;
    return [...arrMain];
  });
});

export default boardGenReducer;
