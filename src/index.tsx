import * as React from "react";
import { render } from "react-dom";
//

//components:
//components
import CylinoidSVG from "./CylinoidSVG.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>9Grid</h1>
      <h2>Start editing to see some magic happen!</h2>
     <CylinoidSVG /> 
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
