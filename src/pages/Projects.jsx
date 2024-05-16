import React, { useState, useEffect, useMemo } from "react";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Typography } from "@mui/material";

const Projects = () => {
  const cards = useMemo(
    () => [
      {
        id: 1,
        title: "Food Palace",
        desc: "Website created in order for me to better understand ReactJS",
        inputId: "slide1",
        link: "https://github.com/AndreiBarari/Food-Palace",
      },
      {
        id: 2,
        title: "About Me app",
        desc: "Website create in order for me to better understand Scss",
        inputId: "slide2",
        link: "https://github.com/AndreiBarari/About-me",
      },
      {
        id: 3,
        title: "Vanilla apps",
        desc: "A series of small challenges I undertook in order to better understand HTML5, CSS3 and JavaScript",
        inputId: "slide3",
        link: "https://github.com/AndreiBarari/Vanilla-apps",
      },
      {
        id: 4,
        title: "Front-End Mentor",
        desc: "My completed challenges from FrontendMentor. More to come",
        inputId: "slide4",
        link: "https://github.com/AndreiBarari/FrontendMentorProjects",
      },
      {
        id: 5,
        title: "Coming Soon",
        desc: "Stay tuned or check my github profile in order to see all my projects",
        inputId: "slide5",
        link: "https://github.com/AndreiBarari",
      },
    ],
    []
  );

  const [checkedId, setCheckedId] = useState(null);
  console.log(checkedId);
  const [currentChecked, setCurrentChecked] = useState(null);

  useEffect(() => {
    // Calculate the index of the middle item
    const middleIndex = Math.floor(cards.length / 2);
    // Set the checkedId state to the ID of the middle item
    setCheckedId(cards[middleIndex].id);
    setCurrentChecked(cards[middleIndex].id);
  }, [cards]);

  const handleInputChange = (event, cardId) => {
    if (event.target.checked) {
      setCurrentChecked(cardId);
      setCheckedId(cardId);
    } else {
      setCurrentChecked(null);
    }
  };

  return (
    <div className="main-content projects">
      <Typography
        variant="h2"
        sx={{
          color: "#00224d",
          backgroundColor: "#ffffff26",
          backdropFilter: "blur(5px)",
          padding: "0.5rem 1rem",
          borderRadius: "10px",
        }}
      >
        My projects
      </Typography>
      <div className="container">
        {cards.map((card) => (
          <React.Fragment key={card.id}>
            <input
              type="radio"
              name="slide"
              id={`slide${card.id}`}
              checked={currentChecked === card.id}
              onChange={(event) => handleInputChange(event, card.id)}
            />
            <label htmlFor={`slide${card.id}`} className="card">
              <div className="row">
                <div className="description">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
              <a
                href={card.link}
                target="_blank"
                className="preview"
                rel="noopener noreferrer"
              >
                <IconButton
                  sx={{
                    background: "transparent",
                    color: "#fff",
                    width: "60px",
                    margin: "0 auto",
                    borderRadius: "1rem",
                    "&:hover": {
                      background: "#ff660040",
                    },
                  }}
                >
                  <GitHubIcon sx={{ color: "#ff6600", fontSize: "2.5rem" }} />
                </IconButton>
              </a>
              <div className="icon">
                <SettingsOverscanIcon />
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Projects;
