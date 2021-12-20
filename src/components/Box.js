import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { boxHandle } from "../redux/actions/boardGenerator";

export const Box = ({ children, status, coordinate }) => {
  const [boxState, setBoxState] = useState(status);
  const dispatch = useDispatch();
  function fireHandle(coordinate) {
    // let row = Math.floor(coordinate / 10);
    // let column = coordinate % 10;
    console.log(boxState);
    if (boxState.ship) {
      console.log("BOX SHIP   :", boxState.ship);
      setBoxState((box) => {
        console.log("stateeeeeee  :", box);
        return { ...box, fired: true };
      });
    } else {
      setBoxState((box) => {
        return { ...box, fired: true };
      });
    }
  }
  function handleColor() {
    if (boxState.ship) {
      return boxState.fired ? "green" : "yellow";
    } else {
      return boxState.fired && "red";
    }
  }
  return (
    <div
      className={`w-14 h-14 bg-${
        handleColor() ? handleColor() : "sky"
      }-500 hover:bg-sky-800`}
      onClick={() => fireHandle()}
    >
      {boxState.fired ? "true" : "false"}
    </div>
  );
};
