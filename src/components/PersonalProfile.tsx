import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Profile from "./Profile";
import Analytics from "./Analytics";
import Resources from "./Resources";
import About from "./About";
import Activity from "./Activity";
import React from "react";

const PersonalProfile = () => {
  return (
    <>
      <Sidebar />

      <Profile />
      <Analytics />
      <Resources />
      <About />
      <Activity />

      <Footer />
    </>
  );
};

export default PersonalProfile;
