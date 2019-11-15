import React from "react";

export default ({ operator, clickHandler }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="op-btn" onClick={clickHandler}>{operator.char}</button>
    </>
  );
};
