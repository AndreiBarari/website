import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import HelpIcon from "@mui/icons-material/Help";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Typewriter from "./navComponents/Typewriter";

const Navigation = (props) => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const links = [
    { path: "/", name: "Home", icon: <HomeIcon /> },
    { path: "/projects", name: "Portfolio", icon: <FolderCopyIcon /> },
    { path: "/skills", name: "Skills", icon: <MilitaryTechIcon /> },
    { path: "/about", name: "About Me", icon: <HelpIcon /> },
    {
      path: "/contact",
      name: "Contact Me",
      icon: <ConnectWithoutContactIcon />,
    },
  ];

  return (
    <>
      <AppBar position="static">
        <Container sx={{ backgroundColor: "#00224D" }} maxWidth="xxl">
          <Toolbar id="back-to-top-anchor" disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              {/* Mobile menu */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                // keepMounted
                // transformOrigin={{
                //   vertical: "top",
                //   horizontal: "left",
                // }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  // keepMounted
                  // transformOrigin={{
                  //   vertical: "top",
                  //   horizontal: "left",
                  // }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },
                  }}
                >
                  <Stack textAlign="center">
                    {links.map((link) => (
                      <Link
                        activeClassName="active"
                        className="navLinkMobile"
                        key={link.path}
                        to={link.path}
                      >
                        {link.icon}
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              {links.map((link) => (
                <Button
                  key={link.path}
                  onClick={handleCloseNavMenu}
                  disableRipple
                  sx={{
                    color: "inherit",
                    padding: 0,
                    margin: "0 0.4rem",
                    borderRadius: "25px",
                    backgroundColor:
                      location.pathname === link.path
                        ? "#ffffff20"
                        : "transparent",
                  }}
                >
                  <NavLink key={link.path} className="navLink" to={link.path}>
                    {link.icon}
                    {link.name}
                  </NavLink>
                </Button>
              ))}
            </Box>

            {/* Typewriter section */}
            <Typewriter />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
