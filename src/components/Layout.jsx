import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "../components/navComponents/ScrollToTop";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import ParticlesComponent from "./ParticleComponent";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation id="back-to-top-anchor" />
      <ParticlesComponent id="particle-canvas" />
      <Outlet />
      <ScrollToTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardDoubleArrowUpIcon
            sx={{ color: "#ff6600", fontSize: "2rem" }}
          />
        </Fab>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default Layout;
