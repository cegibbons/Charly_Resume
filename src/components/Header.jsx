import React from "react";
import Logo from "../images/cg-logo.png";
import resumePdf from "../images/Charly_Gibbons_Resume.pdf";
import { Container, Grid, Box, Button } from "@mui/material";
import Search from "./Search";

const Header = () => {
  const handleResumeClick = (event) => {
    event.preventDefault();
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          direction={{ xs: "column", sm: "row" }}
          sx={{ maxWidth: 1200, width: "100%" }}
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
              <Button onClick={() => alert('Header Buttons clicked!')}>
                Home
              </Button>
              <Button onClick={handleResumeClick}>
                Resume
              </Button>
              <Button onClick={() => alert('Header Buttons clicked!')}>
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