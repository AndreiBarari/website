import * as React from "react";
import { Stack, Typography, Box, ButtonGroup } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { ResumeBox } from "./footerComponents/ResumeBox";
import SocialBtn from "./footerComponents/SocialBtn";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const links = [
    { path: "/projects", name: "Portofoliu" },
    { path: "/tech", name: "Tech" },
    { path: "/about", name: "About Me" },
    { path: "/contact", name: "Contact Me" },
  ];
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      id: "1",
      path: "https://github.com/AndreiBarari",
      name: "GitHub",
    },

    {
      icon: <LinkedInIcon />,
      id: "2",
      path: "https://www.linkedin.com/in/andrei-barari-29946489/?locale=en_US",
      name: "LinkedIn",
    },

    {
      icon: <FacebookIcon />,
      id: "3",
      path: "https://www.facebook.com/barari.andrei",
      name: "Facebook",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#00224D",
        color: "#e0e0e0",
        textAlign: "center",
        padding: "1rem 0",
      }}
    >
      <Box>
        <Stack
          sx={{
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            padding: "2rem 0",
            gap: "1rem",
          }}
        >
          {/* Social Button Box */}
          <Box>
            <Typography>Designed and created by Andrei</Typography>
            <ButtonGroup>
              {socialLinks.map((el) => (
                <SocialBtn
                  key={el.id}
                  path={el.path}
                  name={el.name}
                  icon={el.icon}
                />
              ))}
            </ButtonGroup>
          </Box>

          {/* Bottom Navigation Box */}
          <Box>
            <Stack
              direction="row"
              spacing="1"
              alignContent="center"
              justifyContent="center"
            >
              {links.map((link) => (
                <Link className="footer-link" key={link.path} to={link.path}>
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>

          {/* Resume File Box */}
          <Box>
            <Typography>Download my Resume</Typography>
            <ResumeBox />
          </Box>
        </Stack>
      </Box>

      {/* Bottom row with copyright text */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "1.1rem",
          fontWeight: "500",
        }}
      >
        &copy; {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
