import React from "react";

export default ({ number, clickHandler }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="num-btn" id={'id' + number} onClick={() => clickHandler(number)}>{number}</button>
    </>
  );
};
