import React from "react";

export default ({ special, clickHandler }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="special-btn" onClick={clickHandler}>{special}</button>
    </>
  );
};
