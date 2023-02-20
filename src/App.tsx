import React from "react";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./css/profile.css";
import Analytics from "./components/Analytics";
import Resources from "./components/Resources";
import About from "./components/About";
import Activity from "./components/Activity";

function App() {
  return (
    <div>
      <Profile />
      <Analytics />
      <Resources />
      <About />
      <Activity />
    </div>
  );
}

export default App;
