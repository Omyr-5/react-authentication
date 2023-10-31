import React from "react";
import { AppContext } from "../../App";
import { useContext } from "react";

const DashboardIndex = () => {
  const { name } = useContext(AppContext);
  const getValues = (li) => {
    let sum = 0;
    for (var index = 0; index < li.length; index++) {
      if (index == 4) {
        break;
      }
      sum = sum + li[index];
    }
    return sum;
  };

  const listValue = getValues([1, 2, 3, 4, 5]);

  // closures
  let a = 10;
  function parent(parentVal) {
    function child() {
      let b = 20;
      function grandChild() {
        let c = a + b / parentVal;
        return c;
      }
      return grandChild();
    }

    return child();
  }
  const val = parent(20);

  let abc = 12;
  function ab() {
    console.log(abc);
    var abc = 12;
  }


  ab();

  return (
    <div>
      <h1 className="text-red-400">dashboard index</h1>
    </div>
  );
};

export default DashboardIndex;
