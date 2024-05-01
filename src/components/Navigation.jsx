import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Menu,
  Container,
  Avatar,
  Button,
  MenuItem,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Portofoliu" },
    { path: "/skills", name: "Skills" },
    { path: "/about", name: "About Me" },
    { path: "/contact", name: "Contact Me" },
  ];

  return (
    <>
      <AppBar position="static">
        <Container sx={{ backgroundColor: "#00224D" }} maxWidth="xxl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
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
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
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
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {links.map((link) => (
                <Button
                  key={link.path}
                  onClick={handleCloseNavMenu}
                  disableRipple
                  sx={{
                    color: "white",
                    display: "block",
                  }}
                >
                  <NavLink key={link.path} className="navLink" to={link.path}>
                    {link.name}
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
