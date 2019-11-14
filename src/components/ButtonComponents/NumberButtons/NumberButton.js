import React from "react";

export default ({ number }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{number}</button>
    </>
  );
};
