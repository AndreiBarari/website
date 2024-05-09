import React from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import CopyEmail from "../components/contactComponents/CopyEmail";

const submitBtnStyles = {
  color: "#fff",
  background: "#00224D",
  border: "2px solid #00224D",
  marginBottom: 10,
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#00224D",
  },
};

const gridItemStyles = {
  padding: "1rem",
  transition: "background .4s ease",
  ":hover": {
    background: "#ffffff46",
  },
};

const Contact = () => {
  const email = "b.andrei91@yahoo.com";

  return (
    <div
      className="main-content contact"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          sx={{
            height: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#ffffff26",
            backdropFilter: "blur(5px)",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={6}
            sx={{
              ...gridItemStyles,
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Stack>
              <Typography variant="h4">Address</Typography>
              <Typography variant="h6">Chinteni, Cluj</Typography>
            </Stack>
            <Stack>
              <Typography variant="h4">Contact Information</Typography>
              <Typography
                variant="h6"
                sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}
              >
                Email:
                <a className="emailLink" href={"mailto:" + { email }}>
                  {email}
                </a>
                <CopyEmail email={email} />
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={12} sm={12} md={6} sx={gridItemStyles}>
            <Typography variant="h4">Contact Us</Typography>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                height: "100%",
                marginTop: "1rem",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <TextField
                id="outlined-name"
                label="Name"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-email-input"
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={submitBtnStyles}
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
