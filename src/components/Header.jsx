import React from "react";
import Logo from "../images/cg-logo.png";
import { Container, Grid, Box, Button } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const location = useLocation();
  const getLinkClassName = (to) =>
    location.pathname === to ? "header-link active" : "header-link";

  return (
      <Container maxWidth={false} sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            "@media (min-width: 768px) and (max-width: 820px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Grid size="auto" data-testid="header-buttons">
            <Box className="header-buttons">
              <Button
                component={NavLink}
                to="/"
                className={getLinkClassName("/")}
              >
                Home
              </Button>
              <Button
                component={NavLink}
                to="/resume"
                className={getLinkClassName("/resume")}
              >
                Resume
              </Button>
              <Button
                component={NavLink}
                to="/about"
                className={getLinkClassName("/about")}
              >
                About
              </Button>
              <Search/>
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Header;