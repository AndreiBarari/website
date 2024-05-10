import React from "react";
import { useState, useEffect } from "react";
import { IconButton, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const NotFound = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 720);
    };

    handleResize(); // Initialize isMobile state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="not-found">
      <Container
        sx={{
          textAlign: isMobile ? "center" : "right",
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h3">Page not found</Typography>
        <Typography variant="h6">
          The page you are looking for does not exist, please return to{" "}
          <IconButton>
            <Link to="/">
              <HomeIcon sx={{ color: "#00224D", fontSize: "2.5rem" }} />
            </Link>
          </IconButton>{" "}
          page!
        </Typography>
      </Container>
    </div>
  );
};

export default NotFound;
