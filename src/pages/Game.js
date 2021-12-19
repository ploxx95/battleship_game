import React from "react";
import { Outlet } from "react-router-dom";

export const Game = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <Outlet />
    </div>
  );
};
