import React, { useState } from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

// math functions
const MATHS = {
  "/": (x, y) => x / y,
  "*": (x, y) => x * y,
  "-": (x, y) => x - y,
  "+": (x, y) => x + y,
  "=": x => x,
  "%": x => x / 100,
  "+/-": x => x * -1
};

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [total, setTotal] = useState("");
  const [displayNum, setDisplayNum] = useState("0");
  const [operate, setOperate] = useState("");

  // display functions
  function numClick(num) {
    let totalConcat = displayNum;
    if (displayNum === "0") {
      if (num === "0") {
        return;
      }
      totalConcat = "";
    }

    totalConcat += num;
    setDisplayNum(totalConcat);
  }

  function operateClick(op) {
    if (displayNum !== "") {
      calculateTotal();
      setDisplayNum("");
    }
    setOperate(op);
  }

  function calculateTotal() {
    let result = displayNum;
    if (operate) {
      console.log("Operator:", operate);
      result = MATHS[operate](Number(total), Number(displayNum));
      console.log("Result:", result);
    }
    setTotal(result);
  }

  function specialClick(special) {
    if (special === "C") {
      setTotal("");
      setDisplayNum("0");
      setOperate("");
    } else if (special === "+/-") {
      let display = displayNum * -1;
      if (!displayNum) {
        display = total * -1;
        setTotal(display);
      } else {
        setDisplayNum(display);
      }
      setOperate("");
    } else if (special === "%") {
      let result = displayNum;
      if (!displayNum) {
        result = MATHS[special](Number(total));
        setTotal(result);
      } else {
        result = MATHS[special](Number(displayNum));
        setDisplayNum(result);
      }
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display total={displayNum || total} />
        <div className="btns-container">
          <div className="darkblue-btns">
            <Specials clickHandler={special => specialClick(special)} />
            <Numbers clickHandler={num => numClick(num)} />
          </div>
          <Operators clickHandler={operator => operateClick(operator)} />
        </div>
      </div>
    </div>
  );
}

export default App;
