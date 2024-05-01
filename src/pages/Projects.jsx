import React from "react";
import SettingsOverscanIcon from "@mui/icons-material/SettingsOverscan";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Projects = () => {
  const cards = [
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
  ];

  return (
    <div className="projects">
      <div class="container">
        {cards.map((card) => (
          <React.Fragment key={card.id}>
            <input type="radio" name="slide" id={`slide${card.id}`} />
            <label htmlFor={`slide${card.id}`} className="card">
              <div className="row">
                <div className="description">
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
              <a
                href="https://www.google.com"
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
                      background: "#ffffff40",
                    },
                  }}
                >
                  <VisibilityIcon sx={{ color: "#fff" }} />
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
