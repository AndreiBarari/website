import React from "react";
import { Box, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import TerminalIcon from "@mui/icons-material/Terminal";
import SportsIcon from "@mui/icons-material/Sports";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const About = () => {
  const skills = [
    {
      id: 1,
      title: "Economist",
      icon: <CurrencyExchangeIcon sx={{ fontSize: "4rem" }} />,
    },
    {
      id: 1,
      title: "Web developer",
      icon: <TerminalIcon sx={{ fontSize: "4rem" }} />,
    },
    {
      id: 1,
      title: "Aplication developer",
      icon: <AppsOutlinedIcon sx={{ fontSize: "4rem" }} />,
    },
    {
      id: 1,
      title: "Personal coach",
      icon: <SportsIcon sx={{ fontSize: "4rem" }} />,
    },
  ];

  return (
    <div className="main-content about">
      <Typography variant="h2" margin={"3rem 0 0 0"} fontWeight={700}>
        Who Am I?
      </Typography>
      <Box
        className="profile-picture"
        sx={{
          borderRadius: "50%",
          border: "0.2rem solid #00224D",
          width: "360px",
          height: "360px",
        }}
      ></Box>
      <Typography
        variant="body1"
        textAlign="center"
        maxWidth="780px"
        sx={{
          background: "#ffffff80",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        I am a self-taught web developer with a passion for crafting dynamic,
        interactive, and responsive web applications. My analytical mindset,
        combined with a background in economics, allows me to create
        user-centric solutions. As a personal coach, I bring empathy, effective
        communication, and adaptability to my work environment.
      </Typography>
      <section className="grid-wrapper">
        {skills.map((el) => (
          <div key={el.id} className="grid-item">
            {el.icon}
            <Typography variant="h5" fontWeight={700}>
              {el.title}
            </Typography>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
