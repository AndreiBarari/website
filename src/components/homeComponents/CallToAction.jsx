import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const commonButtonStyles = {
  color: "#fff",
  background: "#00224D",
  border: "2px solid #00224D",
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "#e0e0e0",
    color: "#00224D",
  },
};

export const AboutButton = () => (
  <Button
    variant="contained"
    sx={{ ...commonButtonStyles }}
    component={Link}
    className="home-link"
    to="/about"
  >
    About Me
  </Button>
);

export const ContactButton = () => (
  <Button
    variant="contained"
    sx={{
      ...commonButtonStyles,
      background: "#e0e0e0",
      color: "#00224D",
      "&:hover": {
        color: "#fff",
        background: "#00224D",
      },
    }}
    component={Link}
    to="/contact"
  >
    Contact Me
  </Button>
);
