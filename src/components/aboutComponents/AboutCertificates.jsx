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
    name: "Web developer bootcamp - 2021",
  },
  {
    id: 2,
    name: "Scss/Sass - 2021",
  },
  {
    id: 3,
    name: "Fortech ReactJS Training - 2022",
  },
  {
    id: 4,
    name: "Personal Coach - 2024",
  },
];

const AboutCertificates = () => {
  return (
    <div className="area reveal">
      <Typography variant="h4">Certificates</Typography>

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

export default AboutCertificates;
