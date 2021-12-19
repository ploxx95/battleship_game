import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Game = () => {
  const { gameData } = useSelector((state) => state);
  // const { arrShips, difficult, user } = gameData;
  console.log("GAME DATAA  : ", gameData);
  return (
    <>
      {gameData.user ? (
        <div>
          <h1>{gameData.user}</h1>
          <h2>Difficult : {gameData.difficult}</h2>
          <h2>Ships : {gameData.arrShips?.length}</h2>
        </div>
      ) : (
        ""
      )}
      <Outlet />
      <div className="h-full flex justify-center items-center"></div>
    </>
  );
};
