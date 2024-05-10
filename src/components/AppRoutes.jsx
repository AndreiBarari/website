import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "./Layout";

import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import About from "../pages/About";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
