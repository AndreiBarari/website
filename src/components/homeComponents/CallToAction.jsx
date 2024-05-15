import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const CtaButton = ({ path, name }) => (
  <Button variant="contained" className="cta-button" component={Link} to={path}>
    {name}
  </Button>
);
