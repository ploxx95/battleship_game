import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { boardGenerate } from "../redux/actions/boardGenerator";
import { Box } from "./Box";

export default function BoardGrid() {
  const { boardGenReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  // function generateBoard() {
  //   dispatch(boardGenerate());
  // }
  return (
    <>
      {/* <button onClick={generateBoard}>GENERATE!!</button> */}
      <div className="board">
        {boardGenReducer.map((row) =>
          row.map((col) => (
            <Box key={col.coordinate} ship={col?.status}>
              {col?.coordinate}
            </Box>
          ))
        )}
      </div>
      <div className="bg-red-600 bg-slate-600"> </div>
    </>
  );
}
