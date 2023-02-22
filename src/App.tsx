import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalProfile from "./components/PersonalProfile";
import React from "react";
import "./css/profile.css";
import { Feed } from "./components/Feed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<PersonalProfile />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
