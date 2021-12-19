import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-sky-300 h-screen w-screen">
      <div className="container mx-auto h-full ">
        <Outlet />
      </div>
    </div>
  );
};
