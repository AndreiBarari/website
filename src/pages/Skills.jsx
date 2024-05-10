import React from "react";
import { Typography } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { AiOutlineCode } from "react-icons/ai";
import { MdGridOn } from "react-icons/md";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaReact,
  FaServer,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";

const customDot = {
  margin: 0,
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3.5rem",
  height: "3.5rem",
  color: "#00224D",
  fontSize: "1.2rem",
  fontWeight: 600,
  backgroundColor: "#ffffff26",
  backdropFilter: "blur(5px)",
  border: "1px solid #00224D",
};

const customConnector = {
  width: "0.3rem",
  minHeight: "5rem",
  background: "#00224D",
};
const customTitle = {
  padding: "0.6rem 1rem",
  fontSize: "1.5rem",
  color: "#00224D",
  fontWeight: 600,
};
const customTimelineContent = {
  padding: "0.4rem 1rem",
  color: "#00224D",
  backgroundColor: "#ffffff26",
  backdropFilter: "blur(5px)",
  borderRadius: "10px",
  fontSize: "1.1rem",
};

const Skills = () => {
  const techElements = [
    {
      title: "HTML5",
      description:
        "Lorem ipsum dolor solor solor solor solor solor solor solor solor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaHtml5 size={36} />,
    },
    {
      title: "CSS3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaCss3 size={36} />,
    },
    {
      title: "JavaScript",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaJs size={36} />,
    },
    {
      title: "NodeJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaNodeJs size={36} />,
    },
    {
      title: "ExpressJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <AiOutlineCode size={36} />,
    },
    {
      title: "MongoDB",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaServer size={36} />,
    },
    {
      title: "ReactJS",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaReact size={36} />,
    },
    {
      title: "Scss/Sass",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaSass size={36} />,
    },
    {
      title: "MaterialUI",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <MdGridOn size={36} />,
    },
    {
      title: "Bootstrap",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec adipiscing tristique risus.",
      icon: <FaBootstrap size={36} />,
    },
  ];

  return (
    <div className="main-content skills">
      <Timeline id="timeline" position="alternate">
        {techElements.map((el, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent sx={customTitle} color="text.secondary">
              {el.title}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={customDot}>{el.icon}</TimelineDot>
              <TimelineConnector sx={customConnector} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography sx={customTimelineContent}>
                {el.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Skills;
