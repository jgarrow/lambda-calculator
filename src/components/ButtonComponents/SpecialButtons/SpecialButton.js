import React from "react";

export default ({ special }) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{special}</button>
    </>
  );
};
