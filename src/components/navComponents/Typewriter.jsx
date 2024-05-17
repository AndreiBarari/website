import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Typewriter = () => {
  const location = useLocation();
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const links = [
      { path: "/", text: "Welcome! Feel free to explore." },
      { path: "/projects", text: "This is part of my work." },
      { path: "/skills", text: "This is what I know." },
      { path: "/about", text: "This is who I am." },
      { path: "/contact", text: "Contact me. Thank you" },
    ];
    const newText =
      links.find((item) => item.path === location.pathname)?.text ||
      "Work in progress!";
    setCurrentText(newText);
  }, [location.pathname]);

  useEffect(() => {
    const typewriterElement = document.querySelector(".typewriter");
    if (typewriterElement) {
      typewriterElement.classList.remove("animate");
      setTimeout(() => {
        typewriterElement.classList.add("animate");
      }, 0);
    }
  }, [currentText]);

  return (
    <Typography
      variant="subtitle1"
      sx={{
        backgroundColor: "#00224D",
        color: "#fff",
        padding: "0.2rem 0.4rem",
        borderRadius: "10px",
        maxWidth: "fit-content",
        fontSize: "1.1rem",
        fontWeight: "700",
      }}
      className="typewriter"
    >
      {currentText}
    </Typography>
  );
};

export default Typewriter;
