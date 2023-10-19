import React from "react";
import { AppContext } from "../../App";
import { useContext } from "react";

const DashboardIndex = () => {
  const { name, check } = useContext(AppContext);

  // console.log(hello)
  return (
    <div>
      <h1 className="text-red-400">dashboard index</h1>
    </div>
  );
};

export default DashboardIndex;
