import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "../components/navComponents/ScrollToTop";
import Fab from "@mui/material/Fab";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Layout = () => {
  return (
    <div className="layout">
      <Navigation id="back-to-top-anchor" />
      <Outlet />
      <ScrollToTop>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default Layout;
