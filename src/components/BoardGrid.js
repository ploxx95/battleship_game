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
            <Box
              key={col.coordinate}
              status={col?.status}
              coordinate={col.coordinate}
            >
              {col?.coordinate}
            </Box>
          ))
        )}
      </div>
      <div className="bg-red-500 bg-green-500 bg-slate-500 bg-purple-500 bg-yellow-500 ">
        {" "}
      </div>
    </>
  );
}
