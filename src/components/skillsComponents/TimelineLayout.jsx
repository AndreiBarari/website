import React from "react";
import { Typography } from "@mui/material";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

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
  padding: "0.5rem 1rem",
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

export const BasicTimeline = ({ title, icon, description }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot sx={customDot}>{icon}</TimelineDot>
        <TimelineConnector sx={customConnector} />
      </TimelineSeparator>
      <TimelineContent>
        <Typography sx={customTitle}>{title}</Typography>
        <Typography sx={customTimelineContent}>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const OppositeTimeline = ({ title, icon, description }) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent sx={customTitle} color="text.secondary">
        {title}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot sx={customDot}>{icon}</TimelineDot>
        <TimelineConnector sx={customConnector} />
      </TimelineSeparator>
      <TimelineContent>
        <Typography sx={customTimelineContent}>{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};
