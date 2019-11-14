import React from "react";

export default ({ operator }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{operator.char}</button>
    </>
  );
};
