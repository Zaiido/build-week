import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Canvas />
    </div>
  );
}

export default App;
