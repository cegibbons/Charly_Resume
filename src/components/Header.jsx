import React from "react";
import Logo from "../images/cg-logo.png";
import { Container, Grid, Box, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
      <Container maxWidth={false} sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
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
          <Grid item>
            <img
              src={Logo}
              alt="Charly Gibbons"
              className="header-logo"
            />
          </Grid>
          <Grid item data-testid="header-buttons">
            <Box className="header-buttons">
              <Button component={RouterLink} to="/">
                Home
              </Button>
              <Button component={RouterLink} to="/resume">
                Resume
              </Button>
              <Button component={RouterLink} to="/about">
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