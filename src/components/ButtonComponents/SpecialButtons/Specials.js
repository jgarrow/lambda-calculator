import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton"

//Import your array data to from the provided data file
import { specials } from "../../../data"

export default props => {
  // STEP 2 - add the imported data to state
  const [specialChars, setSpecialChars] = useState(specials);

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialChars.map((char, index) => (
         <SpecialButton key={index} special={char} clickHandler={props.clickHandler}/>
       ))}
    </div>
  );
};
