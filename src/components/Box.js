import React from "react";

export const Box = ({ children, ship }) => {
  return (
    <div className={`w-14 h-14 bg-${ship || "sky"}-600 hover:bg-sky-800`}>
      {children}
    </div>
  );
};
