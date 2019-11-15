import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display"
import Operators from "./components/ButtonComponents/OperatorButtons/Operators"
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers"
import Specials from "./components/ButtonComponents/SpecialButtons/Specials"


// num1 = concat of all number buttons pressed BEFORE any operator or special buttons (besides C) are pressed
// num2 = concat of all number buttons pressed AFTER any operator or special buttons (besides C) are pressed
// operate = variable that stores whichever operator/special button was pressed 

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [total, setTotal] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operate, setOperate] = useState("");

  function numClick(num) {
    let totalConcat = total;
    if (total === '0') {
      if (num === '0') {
        return;
      }
      totalConcat = "";
    }
    totalConcat += num;
    setTotal(totalConcat);
  }


  function multiply(numOne, numTwo) {
    return numOne * numTwo;
  }

  function divide(numOne, numTwo) {
    return numOne / numTwo;
  }

  function add(numOne, numTwo) {
    return numOne + numTwo;
  }

  function subtract(numOne, numTwo) {
    return numOne - numTwo;
  }

  function modulo(numOne, numTwo) {
    return numOne % numTwo;
  }

//  when = button is clicked, setResult()
// when C button is clicked, setResult(0)


  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display total={total}/>
        <div className="btns-container">
          <div className="darkblue-btns">
            <Specials />
            <Numbers clickHandler={(num) => numClick(num)}/>
          </div>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
