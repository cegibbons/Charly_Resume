import React from "react";
import Logo from "../images/cg_logo.png";
import resumePdf from "../images/Charly_Gibbons_Resume.pdf";
import { Container, Grid, Box, Link } from "@mui/material";
import Search from "./Search";

const Header = () => {
  const handleResumeClick = (event) => {
    event.preventDefault();
    window.open(resumePdf, "_blank", "noopener,noreferrer");
  };

  return (
    <header>
      <Container>
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
        >
          <Grid item>
            <img
              src={Logo}
              alt="Charly Gibbons"
              style={{ width: 140, height: "auto" }}
            />
          </Grid>
          <Grid item>
            <Box
              sx={{
                typography: "body1",
                display: "flex",
                alignItems: "center",
                "& > :not(style) ~ :not(style)": {
                  ml: 2,
                },
              }}
              onClick={() => alert('Header links clicked!')}
            >
              <Link href="#">
                Home
              </Link>
              <Link href={resumePdf} color="inherit" onClick={handleResumeClick}>
                Resume
              </Link>
              <Link href="#" variant="body2">
                About
              </Link>
              <Search/>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </header>
  );
}

export default Header;