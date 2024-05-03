import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Button, Stack, Typography } from "@mui/material";
import desktop from "../assets/home-desktop.jpg";
import laptop from "../assets/home-laptop.jpg";
import tablet from "../assets/home-tablet.jpg";
import phone from "../assets/home-phone.jpg";

const Home = () => {
  return (
    <div className="main-content home">
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        <Grid
          item
          xs={6}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2">Web Developer</Typography>
          <Typography my="2rem" fontSize="1.2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod justo non nunc dictum, in rhoncus sapien
          </Typography>

          <Stack sx={{ display: "flex", gap: "2rem", flexDirection: "row" }}>
            <Link
              className="home-link"
              to="/about"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  background: "#00224D",
                  border: "2px solid #00224D",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#e0e0e0",
                    color: "#00224D",
                  },
                }}
              >
                About Me
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{
                  border: "2px solid #00224D",
                  color: "#00224D",
                  fontWeight: 700,
                  background: "#e0e0e0",
                  "&:hover": {
                    color: "#fff",
                    background: "#00224D",
                  },
                }}
              >
                Contact Me
              </Button>
            </Link>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div class="diamond-grid">
            <div></div>
            <img src={desktop} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={tablet} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={laptop} alt="" class="diamond-grid__item" />
            <div></div>
            <img src={phone} alt="" class="diamond-grid__item" />
            <div></div>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
