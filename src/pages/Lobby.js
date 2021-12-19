import { Link, Outlet } from "react-router-dom";

export const Lobby = () => {
  return (
    <>
      <div className="text-center text-blue-700 font-bold text-6xl h-5/6 flex flex-col justify-center gap-9 ">
        <div className="mb-6 text-indigo-900 text-8xl">
          <h1 className="">BATTLESHIP</h1>
        </div>
        <Link to="game">
          <h2 className="hover:text-blue-900 cursor-pointer">START GAME</h2>
        </Link>
        <Link to="credits">
          <h2 className="hover:text-blue-900 cursor-pointer">CREDITS</h2>
        </Link>
      </div>
    </>
  );
};
