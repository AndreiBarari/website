import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MoodBadIcon from "@mui/icons-material/MoodBad";

const softSkillsData = [
  {
    id: 1,
    name: "Communication",
    grade: 4,
  },
  {
    id: 2,
    name: "Teamwork",
    grade: 3,
  },
  {
    id: 3,
    name: "Leadership",
    grade: 3,
  },
  {
    id: 4,
    name: "Critical Thinking",
    grade: 3,
  },
  {
    id: 5,
    name: "Adaptability",
    grade: 5,
  },
  {
    id: 6,
    name: "Resilience",
    grade: 4,
  },
  {
    id: 7,
    name: "Empathy",
    grade: 5,
  },
  {
    id: 8,
    name: "Problem Solving",
    grade: 5,
  },
];
const strongSkillsData = [
  {
    id: 1,
    name: "HTML5",
    grade: 4,
  },
  {
    id: 2,
    name: "CSS2",
    grade: 4,
  },
  {
    id: 3,
    name: "JavaScript",
    grade: 3,
  },
  {
    id: 4,
    name: "NodeJS",
    grade: 2,
  },
  {
    id: 5,
    name: "ReactJS",
    grade: 3,
  },
  {
    id: 6,
    name: "Marketing",
    grade: 4,
  },
  {
    id: 7,
    name: "Management",
    grade: 4,
  },
  {
    id: 8,
    name: "Coaching",
    grade: 5,
  },
];

export const StrongSkills = () => {
  return (
    <div className="area reveal">
      <Typography variant="h4">Work Skills</Typography>
      <Grid container>
        {strongSkillsData.map((item) => (
          <Grid item xs={6} sx={{ minHeight: "72px" }} key={item.id}>
            <Typography variant="h6">{item.name}</Typography>
            <Stack direction="row">
              {Array.from({ length: 5 }).map((_, index) =>
                index < item.grade ? (
                  <CircleIcon key={index} />
                ) : (
                  <CircleOutlinedIcon key={index} />
                )
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export const SoftSkills = () => {
  return (
    <div className="area reveal">
      <Typography variant="h4">Soft Skills</Typography>
      <Grid container>
        {softSkillsData.map((item) => (
          <Grid item xs={6} sx={{ minHeight: "72px" }} key={item.id}>
            <Typography variant="body1">{item.name}</Typography>
            <Stack direction="row">
              {Array.from({ length: 5 }).map((_, index) =>
                index < item.grade ? (
                  <EmojiEmotionsIcon key={index} />
                ) : (
                  <MoodBadIcon key={index} />
                )
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
