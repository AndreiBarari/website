import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  FormControl,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import CopyEmail from "../components/contactComponents/CopyEmail";

const gridItemStyles = {
  padding: "1rem 2rem",
  borderRadius: "10px",
  transition: "background .4s ease",
  ":hover": {
    background: "#ffffff46",
  },
};

const Contact = () => {
  const form = useRef();

  const email = "b.andrei91@yahoo.com";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    emailjs
      .sendForm("service_9f0316n", "template_2tnwyvi", form.current, {
        publicKey: "YiGOHRuuU1FcA-kNl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("Failed!", error.text);
        }
      );
    reset();
  };

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
      <Container>
        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            borderRadius: "10px",
            overflow: "hidden",
            background: "#ffffff26",
            backdropFilter: "blur(5px)",
            margin: "0 auto",
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
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <Stack>
              <Typography variant="h4">Location</Typography>
              <Typography variant="h6">Cluj-Napoca</Typography>
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
            <Typography variant="h4">Contact me</Typography>
            <FormControl
              ref={form}
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
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
                name="user_name"
                variant="outlined"
                fullWidth
                color="warning"
                {...register("name", { required: true })}
                error={Boolean(errors.name)}
                helperText={errors.name ? "Name is required" : null}
              />
              <TextField
                id="outlined-email-input"
                type="email"
                label="Email"
                name="user_email"
                variant="outlined"
                fullWidth
                color="warning"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                error={Boolean(errors.email)}
                helperText={errors.email ? "Invalid email address" : null}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                name="message"
                multiline
                rows={4}
                fullWidth
                color="warning"
                variant="outlined"
                {...register("message", { required: true })}
                error={Boolean(errors.message)}
                helperText={errors.message ? "Message is required" : null}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginBottom: 10 }}
                className="cta-button"
                type="submit"
              >
                Submit
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
