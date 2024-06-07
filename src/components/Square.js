import React from "react";

function Square({value ,handleClick}) {
  console.log(value,"value")
  return (
    <button className={"square"} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Square;
