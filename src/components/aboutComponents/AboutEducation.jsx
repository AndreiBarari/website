import React from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const educationData = [
  {
    id: 1,
    name: "I.D. Lăzărescu Highschool - Graduate in Economics",
  },
  {
    id: 2,
    name: "Babeș-Bolyai University - Bachelor in Economics",
  },
  {
    id: 3,
    name: "Udemy - Web developer bootcamp",
  },
  {
    id: 4,
    name: "Psy Focus Center - Personal Coach",
  },
];

const AboutEducation = () => {
  return (
    <div className="area">
      <Typography variant="h4" className="reveal">
        Education
      </Typography>

      {educationData.map((item) => (
        <List key={item.id}>
          <ListItem sx={{ padding: "0" }}>
            <ListItemIcon>
              <SendOutlinedIcon sx={{ color: "#00224D" }} />
            </ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </ListItem>
        </List>
      ))}
    </div>
  );
};

export default AboutEducation;
