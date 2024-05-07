import React from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  return (
    <div className="main-content contact">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h4">Address</Typography>
            <Typography variant="body1">123 Main St, City, State</Typography>
            <Typography variant="h4">Contact Information</Typography>
            <Typography variant="body1">Email: info@example.com</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <form
              sx={{ "& .MuiTextField-root": { margin: 1 } }}
              noValidate
              autoComplete="off"
            >
              <Typography variant="h4">Contact Us</Typography>
              <div
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
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
                  sx={{ marginBottom: 10 }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
