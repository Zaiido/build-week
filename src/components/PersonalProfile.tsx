import CustomNavbar from "./CustomNavbar";
import SubNav from "./SubNav";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import React from "react";
import Experience from "./Experience";
import Profile from "./Profile";
import { Activity } from "react-bootstrap-icons";
import About from "./About";
import Analytics from "./Analytics";
import Resources from "./Resources";

const PersonalProfile = () => {
  return (
    <>
      <CustomNavbar />
      <SubNav />
      <Sidebar />

      <Profile />
      <Analytics />
      <Resources />
      <About />
      <Activity />
      <Experience />
      <Footer />
    </>
  );
};

export default PersonalProfile;
