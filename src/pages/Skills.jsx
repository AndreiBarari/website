import { List, ListItem, Typography } from "@mui/material";
import React from "react";

const Skills = () => {
  const techElements = [
    {
      title: "HTML5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 6,
    },
    {
      title: "CSS3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 6,
    },
    {
      title: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 5,
    },
    {
      title: "ReactJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 3,
    },
    {
      title: "NodeJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 2,
    },
    {
      title: "MaterialUI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 3,
    },
    {
      title: "Scss",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      stage: 4,
    },
  ];

  return (
    <div className="main-content tech">
      <List className="tech-list" style={{ "--length": techElements.length }}>
        {techElements.map((el, index) => (
          <li className="tech-item" key={index} style={{ "--i": el.stage }}>
            <Typography component="h3">{el.title}</Typography>
            <Typography>{el.description}</Typography>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Skills;
