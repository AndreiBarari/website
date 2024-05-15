import { Typography } from "@mui/material";
import React from "react";

const AboutDescription = () => {
  return (
    <div className="area reveal">
      <Typography variant="h4">Who am I?</Typography>
      <Typography variant="body1">
        I am a self-taught web developer with a passion for crafting dynamic,
        interactive, and responsive web applications. I used various resources
        from Udemy to freeCodeCamp and to web development Youtube channels to
        learn and improve my skills, after which I created personal projects to
        further understand and improve what I've learned.
      </Typography>
      <Typography variant="body1">
        I am a graduate from Babeș-Bolyai University school of economics,
        focused on capital markets, marketing, manangement and accounting. My
        analytical mindset, combined with a background in economics, allows me
        to create user-centric solutions.
      </Typography>
      <Typography variant="body1">
        I am a certified Personal Coach, with work experience in dealing with
        various situations presented by my clients over my work period. As a
        personal coach, I bring empathy, effective communication, and
        adaptability to collaborative projects.
      </Typography>
    </div>
  );
};

export default AboutDescription;
