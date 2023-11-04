import { useState } from "react";
import myContext from "./myContext";

const MyState = (props) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return(
    <myContext.Provider value={{mode, toggleMode}}>
        {props.children}
    </myContext.Provider>
  ) 
};

export default MyState;
