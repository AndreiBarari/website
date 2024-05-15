import React from "react";
import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

const workExperienceData = [
  {
    id: 1,
    name: "Economist",
    year: "2015",
    description: "Required of me:",
    list: [
      "Financial Planning",
      "Implementing projects",
      "Paperwork",
      "Conducting training",
    ],
  },
  {
    id: 2,
    name: "Freelance",
    year: "2016 - Present",
    description: "Required of me:",
    list: [
      "Translation",
      "Call Center Support",
      "Financial advice",
      "Councilling",
    ],
  },
  {
    id: 3,
    name: "Personal Coach",
    year: "2024 - Present",
    description: "Required of me:",
    list: [
      "Customized planning",
      "Effective communication",
      "Relationship Co-Creation",
      "Constructive feedback",
    ],
  },
];

const AboutExperience = () => {
  return (
    <div className="area">
      <Typography variant="h4">Work Experience</Typography>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {workExperienceData.map((item) => (
          <Stack key={item.id}>
            <Typography variant="h6">
              {item.name} • {item.year}{" "}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
            <List>
              {item.list.map((listItem) => (
                <ListItem key={listItem} sx={{ padding: "0.3rem 0" }}>
                  <ListItemIcon sx={{ color: "#00224D", minWidth: "36px" }}>
                    <DoneIcon />
                  </ListItemIcon>
                  <ListItemText>{listItem}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Stack>
        ))}
      </Container>
    </div>
  );
};

export default AboutExperience;
